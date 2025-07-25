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
import LatestCarousel from "../Article/parts/LatestCarousel";
import UpdatesList from "./parts/UpdatesList";
import ArticleLists from "../Article/parts/ArticleLists";
import checkLang from "@/utils/checkLang";
import ComplexPaginaton from "@/Components/ComplexPaginaton";
import { useTranslation } from "react-i18next";
import { SpinnerContext } from "@/Context/SpinnerContext";

function TaxUpdates() {
    const { locale, page, latest, updates, categories, filters } =
        usePage().props;
    const theme = useTheme();
    const { t } = useTranslation();
    const { toggleSpinner } = useContext(SpinnerContext);

    const [search, setSearch] = useState(filters.search || "");
    const [categoryId, setCategoryId] = useState(filters.categoryId || "");

    const fetchArticles = (newFilters = {}) => {
        router.get(
            checkLang(
                locale,
                route("updates"),
                route("updates.id"),
                route("updates.jp"),
                route("updates.ch")
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
    return (
        <Guest
            en={route("updates")}
            id={route("updates.id")}
            jp={route("updates.jp")}
            ch={route("updates.ch")}
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
                route("updates"),
                route("updates.id"),
                route("updates.jp"),
                route("updates.ch")
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
                                    fontSize: search
                                        ? "1.625rem"
                                        : "2.30375rem",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1.6rem",
                                    },
                                    lineHeight: "1.17857248em",
                                    letterSpacing: "0.009em",
                                }}
                                variant="h2"
                            >
                                {search
                                    ? checkLang(
                                          locale,
                                          `Search results for "${search}"`,
                                          `Hasil pencarian untuk "${search}"`
                                      )
                                    : t("latestUpdates")}
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
                        <UpdatesList
                            articles={updates}
                            locale={locale}
                            theme={theme}
                        />
                    </div>
                    <div className="row mt-5">
                        <ComplexPaginaton
                            currentPage={updates.current_page}
                            lastPage={updates.last_page}
                            onPageChange={(page) => {
                                router.get(
                                    checkLang(
                                        locale,
                                        route("updates"),
                                        route("updates.id"),
                                        route("updates.jp"),
                                        route("updates.ch")
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

export default TaxUpdates;
