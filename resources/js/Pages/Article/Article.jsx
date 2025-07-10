import { useContext, useState } from "react";
import {
    Box,
    Typography,
    useTheme,
    TextField,
    MenuItem,
    Button,
} from "@mui/material";
import { usePage, router } from "@inertiajs/react";
import { IoSearch } from "react-icons/io5";
import Guest from "@/Layout/Guest";
import LatestCarousel from "./parts/LatestCarousel";
import ArticleLists from "./parts/ArticleLists";
import checkLang from "@/utils/checkLang";
import ComplexPaginaton from "@/Components/ComplexPaginaton";
import { useTranslation } from "react-i18next";
import { SpinnerContext } from "@/Context/SpinnerContext";

function Article() {
    const { locale, page, latest, articles, categories, filters } =
        usePage().props;
    const theme = useTheme();
    const { t } = useTranslation();
    const { toggleSpinner } = useContext(SpinnerContext);

    const [search, setSearch] = useState(filters.search || "");
    const [categoryId, setCategoryId] = useState(filters.categoryId || "");

    const fetchArticles = (newFilters = {}) => {
        router.get(
            route("articles"),
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

    return (
        <Guest
            en={route("articles")}
            id={route("articles.id")}
            jp={route("articles.jp")}
            ch={route("articles.ch")}
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
                route("articles"),
                route("articles.id"),
                route("articles.jp"),
                route("articles.ch")
            )}
        >
            <Box
                component="section"
                sx={{
                    position: "relative",
                    [theme.breakpoints.up("md")]: {
                        maxHeight: "100vh",
                        overflow: "hidden",
                    },
                    [theme.breakpoints.down("md")]: {
                        paddingTop: "100px",
                    },
                }}
            >
                <LatestCarousel data={latest} locale={locale} theme={theme} />
            </Box>
            <Box className="py-3">
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-12 col-md-6">
                            <Typography
                                sx={{
                                    color: theme.palette.custom.orange,
                                    fontSize: "2.30375rem",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1.6rem",
                                    },
                                    lineHeight: "1.17857248em",
                                    letterSpacing: "0.009em",
                                }}
                                variant="h2"
                            >
                                {t("latestArticle")}
                            </Typography>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-end align-items-flex-start gap-3">
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Category"
                                size="small"
                                helperText="Please select category"
                                onChange={onHandleCategoryChange}
                                defaultValue={categoryId}
                                value={categoryId}
                            >
                                <MenuItem
                                    sx={{ color: theme.palette.custom.white }}
                                    key="reset"
                                    value=""
                                >
                                    Category
                                </MenuItem>
                                {categories.map((option) => (
                                    <MenuItem
                                        sx={{
                                            color: theme.palette.custom.white,
                                        }}
                                        key={option.id}
                                        value={option.id}
                                    >
                                        {option.title}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <form
                                onSubmit={onHandleSearch}
                                className="d-flex align-items-start justify-content-center"
                            >
                                <TextField
                                    id="outlined-basic"
                                    label="Search"
                                    variant="outlined"
                                    size="small"
                                    onChange={(e) => setSearch(e.target.value)}
                                    value={search}
                                />
                                <Button
                                    variant="contained"
                                    type="submit"
                                    sx={{
                                        padding: "8.5px 14px",
                                        svg: { fontSize: "1.35rem" },
                                    }}
                                >
                                    <IoSearch />
                                </Button>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <ArticleLists
                            articles={articles}
                            locale={locale}
                            theme={theme}
                        />
                    </div>
                    <div className="row mt-5">
                        <ComplexPaginaton
                            currentPage={articles.current_page}
                            lastPage={articles.last_page}
                            onPageChange={(page) => {
                                router.get(
                                    checkLang(
                                        locale,
                                        route("articles"),
                                        route("articles.id"),
                                        route("articles.jp"),
                                        route("articles.ch")
                                    ),
                                    { page },
                                    {
                                        preserveState: true,
                                    }
                                );
                            }}
                        />
                    </div>
                </div>
            </Box>
        </Guest>
    );
}

export default Article;
