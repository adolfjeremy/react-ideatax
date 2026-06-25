import { useContext, useState } from "react";
import {
    Box,
    Typography,
    useTheme,
    TextField,
    MenuItem,
    InputBase,
    Button,
    InputAdornment,
    IconButton,
    FormControl,
    InputLabel,
    OutlinedInput,
    Link

} from "@mui/material";
import { usePage, router } from "@inertiajs/react";
import { MdArrowForwardIos } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import Guest from "@/Layout/Guest";
import CustomDropdown from "../Team/Detail/CustomDropdown";
import RegulationList from "../Home/parts/RegulationList";
import LatestCarousel from "./parts/LatestCarousel";
import ArticleHeroSlider from "./parts/ArticleHeroSlider";
import ArticleLists from "./parts/ArticleLists";
import checkLang from "@/utils/checkLang";
import ComplexPaginaton from "@/Components/ComplexPaginaton";
import { useTranslation } from "react-i18next";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { styled } from "@mui/material/styles";
import UpdateList from "./parts/UpdateList";


import RegulationBg from "../../assets/images/reguation-bg.png"

const CustomInput = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
        position: "relative",
        border: "1px solid #191919",
        fontFamily: "sans-serif",
        color: "#191919",
        fontWeight: 500,
        display: "inline-flex",
        alignItems: "center",
        lineHeight: "normal",
        borderRadius:"4px",
        fontSize: 16,
        padding: "8px 28px 8px 10px",
        boxShadow: "none !important",
        "&.Mui-focused .MuiInputBase-input": {
        border: "none !important",
        outline: "none",
        },

        "&:hover .MuiInputBase-input": {
            border: "1px solid #191919",
        },

        "& .MuiInputBase-input:focus": {
            outline: "none",
            border: "1px solid #191919",
        },
    },
}));

function Article() {
    const { locale, page, latest, articles, article_categories, taxupdate_categories, filters, updates, regulations } =
        usePage().props;
    const theme = useTheme();
    const { t } = useTranslation();
    const { toggleSpinner } = useContext(SpinnerContext);

    const [search, setSearch] = useState(filters.search || "");
    const [categoryId, setCategoryId] = useState(filters.categoryId || "");

    const [publicationType, setPublicationType] = useState(filters.publicationType || "all");
    const [articleCategory, setArticleCategory] = useState(filters.articleCategory || "all");
    const [taxUpdateCategory, setTaxUpdateCategory] = useState(filters.taxUpdateCategory || "all");
    const publicationsList = [
        {
            name:"Article",
            id: "Article",
        },
        {
            name:"Tax Update",
            id: "TaxUpdate",
        },
        {
            name:"Library",
            id: "Library",
        }
    ]

    const fetchArticles = (newFilters = {}) => {
        router.get(
            checkLang(
                locale,
                route("publications"),
                route("publications.id"),
                route("publications.jp"),
                route("publications.ch")
            ),
            {
                search: search,
                categoryId: categoryId,
                ...newFilters, // untuk override jika diperlukan
            },
            {
                preserveState: true,
                preserveScroll: true,
                onStart: () => toggleSpinner(true),
                onSuccess: () => toggleSpinner(false),
                onError: () => toggleSpinner(false),
            }
        );
    };

    const onHandleSearch = (e) => {
        e.preventDefault();
        fetchArticles();
    };
    const onHandleCategoryChange = (e) => {
        const selectedCategoryId = e.target.value;
        setCategoryId(selectedCategoryId);
        fetchArticles({ categoryId: selectedCategoryId });
    };

    console.log(publicationType)
    publicationType == "Library" || publicationType == "all" && (console.log("anjay") )

    return (
        <Guest
            en={route("publications")}
            id={route("publications.id")}
            jp={route("publications.jp")}
            ch={route("publications.ch")}
            description={checkLang(
                locale,
                page.description_eng,
                page.description,
                page.description_jpn,
                page.description_ch
            )}
            seo_title={checkLang(
                locale,
                page.SEO_title_eng,
                page.SEO_title,
                page.SEO_title_jpn,
                page.SEO_title_ch
            )}
            href={checkLang(
                locale,
                route("publications"),
                route("publications.id"),
                route("publications.jp"),
                route("publications.ch")
            )}
        >
            <ArticleHeroSlider 
                datas={latest}
                t={t}
                theme={theme}
                locale={locale}
                checkLang={checkLang}
            />

            <Box sx={{
                    position:"sticky",
                    top:"90px",
                    zIndex:3000,
                    backgroundColor: theme.palette.custom.white,
                    py: 2,
                    [theme.breakpoints.down("lg")]: {
                        top: "80px",
                    },
                    [theme.breakpoints.down("md")]: {
                        top: "80px",
                    },
            }} 
            >
                <div className="container">
                    <Box className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center gap-3">
                            <CustomDropdown
                                list={publicationsList}
                                value={publicationType}
                                onChange={setPublicationType}
                                menuDropdown="Publication Type"
                            />
                            {/* <CustomDropdown
                                list={article_categories}
                                value={articleCategory}
                                onChange={setArticleCategory}
                                menuDropdown="Article Categories"
                            />
                            <CustomDropdown
                                list={taxupdate_categories}
                                value={taxUpdateCategory}
                                onChange={setTaxUpdateCategory}
                                menuDropdown="Tax Update Categories"
                            /> */}
                            <form
                                onSubmit={onHandleSearch}
                                className="d-flex align-items-center justify-content-center bg-white"
                            >
                                <CustomInput sx={{position: "relative", height: "100%", paddingRight: "10px"}} placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end" sx={{
                                            position: "absolute",
                                            right: "10px",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                        }}>
                                            <IoSearch size={30} color="#191919"/>
                                        </InputAdornment>}
                                />
                            </form>
                        </div>
                    </Box>
                </div>
            </Box>
            <Box sx={{backgroundColor: theme.palette.custom.gray}} className="py-3 relative">
                <div className="container">
                   {
                        filters?.search && (
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <Typography
                                        sx={{
                                            color: theme.palette.custom.black,
                                            fontSize: "1.256rem",
                                            fontWeight: 300,
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: "1.6rem",
                                            },
                                            lineHeight: "1.17857248em",
                                            letterSpacing: "0.009em",
                                        }}
                                        variant="h2"
                                    >
                                        {checkLang(
                                            locale,
                                            `Search results for "${filters?.search}"`,
                                            `Hasil pencarian untuk "${filters?.search}"`
                                        )}
                                    </Typography>
                                </div>
                            </div>
                        )
                   }
                    
                    {
                        (publicationType == "Article" || publicationType == "all") && (
                            <>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <Typography
                                            sx={{
                                                color: theme.palette.custom.black,
                                                fontSize: "3rem",
                                                    fontWeight: 700,
                                                [theme.breakpoints.down("sm")]: {
                                                    fontSize: "1.6rem",
                                                },
                                                lineHeight: "1.17857248em",
                                                letterSpacing: "0.009em",
                                            }}
                                            variant="h2"
                                        >
                                            {t("articleHead")}
                                        </Typography>
                                    </div>
                                </div>
                                <div className="row">
                                <ArticleLists
                                    articles={articles}
                                    locale={locale}
                                    theme={theme}
                                />
                                </div>
                                <div className="row my-4">
                                    <ComplexPaginaton
                                        currentPage={articles.current_page}
                                        lastPage={articles.last_page}
                                        onPageChange={(page) => {
                                            router.get(
                                                checkLang(
                                                    locale,
                                                    route("publications"),
                                                    route("publications.id"),
                                                    route("publications.jp"),
                                                    route("publications.ch")
                                                ),
                                                { page },
                                                {
                                                    preserveState: true,
                                                }
                                            );
                                        }}
                                    />
                                </div>
                            </>
                        )
                            
                    }
                    {
                        (publicationType == "TaxUpdate" || publicationType == "all") && (
                            <>
                                <div className="row mt-4">
                                    <div className="col-12 col-md-6">
                                        <Typography
                                            sx={{
                                                color: theme.palette.custom.black,
                                                fontSize: "3rem",
                                                    fontWeight: 700,
                                                [theme.breakpoints.down("sm")]: {
                                                    fontSize: "1.6rem",
                                                },
                                                lineHeight: "1.17857248em",
                                                letterSpacing: "0.009em",
                                            }}
                                            variant="h2"
                                        >
                                            {t("updates")}
                                        </Typography>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <UpdateList
                                        updates={updates}
                                        locale={locale}
                                        theme={theme}
                                    />
                                </div>
                                <div className="row my-5">
                                    <ComplexPaginaton
                                        currentPage={updates.current_page}
                                        lastPage={updates.last_page}
                                        onPageChange={(page) => {
                                            router.get(
                                                checkLang(
                                                    locale,
                                                    route("publications"),
                                                    route("publications.id"),
                                                    route("publications.jp"),
                                                    route("publications.ch")
                                                ),
                                                { page },
                                                {
                                                    preserveState: true,
                                                }
                                            );
                                        }}
                                    />
                                </div>
                            </>
                        )
                    }
                </div>
            </Box>
            <Box>
                {
                    (publicationType == "Library" || publicationType == "all") && (
                        <>
                            <Box sx={{ 
                                backgroundImage: `url(${RegulationBg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center top",
                                py: 8, 
                                [theme.breakpoints.down("md")]: {
                                    py:4,
                                    mt: 6
                                },}}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 ">
                                            <Typography
                                                sx={{
                                                    fontSize: "3rem",
                                                    lineHeight: "1.43749551em",
                                                    fontWeight: "700",
                                                    color: theme.palette.custom.white,
                                                    textAlign: "start",
                                                    [theme.breakpoints.down("md")]: {
                                                        fontSize: "1.5rem",
                                                    },
                                                }}
                                                as="h2"
                                            >
                                                Library
                                            </Typography>
                                        </div>
                                    </div>
                                    <RegulationList regulations={regulations.data} />
                                </div>
                            </Box>
                            <div className="row my-4">
                                <ComplexPaginaton
                                    currentPage={regulations.current_page}
                                    lastPage={regulations.last_page}
                                    onPageChange={(page) => {
                                        router.get(
                                            checkLang(
                                                locale,
                                                route("publications"),
                                                route("publications.id"),
                                                route("publications.jp"),
                                                route("publications.ch")
                                            ),
                                            { page },
                                            {
                                                preserveState: true,
                                            }
                                        );
                                    }}
                                />
                            </div>
                        </>
                    )
                }
            </Box>
            
        </Guest>
    );
}

export default Article;
