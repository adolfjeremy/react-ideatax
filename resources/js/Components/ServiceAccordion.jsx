import { useState } from "react";
import {
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    useTheme,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { GoArrowUpRight } from "react-icons/go";
import { MdExpandMore } from "react-icons/md";
import checkLang from "@/utils/checkLang";

function ServiceAccordion({ categorized, unCategorized, locale }) {
    const theme = useTheme();
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Box
            sx={{
                border: `2px solid ${theme.palette.custom.orange}`,
                padding: 1,
                borderRadius: 2,
                backgroundColor: "white",
            }}
        >
            {categorized.map((category, index) => (
                <Accordion
                    key={`${index}-accordion`}
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}
                    sx={{ border: "none", boxShadow: "none" }}
                >
                    <AccordionSummary
                        expandIcon={
                            expanded === `panel${index + 1}` ? (
                                <MdExpandMore />
                            ) : (
                                <GoArrowUpRight />
                            )
                        }
                        sx={{
                            "&:hover": {
                                span: {
                                    color: theme.palette.custom.orange,
                                },
                            },
                        }}
                        aria-controls={`panel${index + 1}-content`}
                        id={`panel${index + 1}-header`}
                    >
                        <Typography
                            component="span"
                            sx={{
                                transition: "color 200ms",
                                color:
                                    expanded === `panel${index + 1}`
                                        ? theme.palette.custom.orange
                                        : theme.palette.custom.black,
                            }}
                        >
                            {checkLang(
                                locale,
                                category.title_eng,
                                category.title,
                                category.title_jp,
                                category.title_ch
                            )}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List component="div" disablePadding>
                            {category.id === 1 ? (
                                <ListItemButton
                                    component="a"
                                    href={checkLang(
                                        locale,
                                        route("tax-report"),
                                        route("tax-report.id"),
                                        route("tax-report.jp"),
                                        route("tax-report.ch")
                                    )}
                                    key={`${index}-list`}
                                    sx={{
                                        pl: 1,
                                        justifyContent: "start",
                                        gap: 1,
                                    }}
                                >
                                    <Box>
                                        <MdExpandMore />
                                    </Box>
                                    <ListItemText
                                        primary={checkLang(
                                            locale,
                                            "Annual Tax Return Reporting Service for Corporations and Individuals",
                                            "Layanan Pelaporan SPT Tahunan Badan dan Pribadi"
                                        )}
                                    />
                                </ListItemButton>
                            ) : category.id === 2 ? (
                                <>
                                    <ListItemButton
                                        component="a"
                                        href={checkLang(
                                            locale,
                                            route("tax-audit"),
                                            route("tax-audit.id"),
                                            route("tax-audit.jp"),
                                            route("tax-audit.ch")
                                        )}
                                        key={`${index}-listitembutton`}
                                        sx={{
                                            pl: 1,
                                            justifyContent: "start",
                                            gap: 1,
                                        }}
                                    >
                                        <Box>
                                            <MdExpandMore />
                                        </Box>
                                        <ListItemText
                                            primary={checkLang(
                                                locale,
                                                "Tax Audit Assistance",
                                                "Bantuan Pemeriksaan Pajak"
                                            )}
                                        />
                                    </ListItemButton>
                                    <ListItemButton
                                        component="a"
                                        href={checkLang(
                                            locale,
                                            route("tax-refund"),
                                            route("tax-refund.id"),
                                            route("tax-refund.jp"),
                                            route("tax-refund.ch")
                                        )}
                                        key={`${index}-listitembutton2`}
                                        sx={{
                                            pl: 1,
                                            justifyContent: "start",
                                            gap: 1,
                                        }}
                                    >
                                        <Box>
                                            <MdExpandMore />
                                        </Box>
                                        <ListItemText
                                            primary={checkLang(
                                                locale,
                                                "Tax Refund Assistance",
                                                "Bantuan Pengembalian Pajak",
                                                "税金の還付 サポート"
                                            )}
                                        />
                                    </ListItemButton>
                                    <ListItemButton
                                        component="a"
                                        href={checkLang(
                                            locale,
                                            route("sp2dk"),
                                            route("sp2dk.id"),
                                            route("sp2dk.jp"),
                                            route("sp2dk.ch")
                                        )}
                                        key={`${index}-listitembutton2`}
                                        sx={{
                                            pl: 1,
                                            justifyContent: "start",
                                            gap: 1,
                                        }}
                                    >
                                        <Box>
                                            <MdExpandMore />
                                        </Box>
                                        <ListItemText
                                            primary={checkLang(
                                                locale,
                                                "SP2DK Assistance",
                                                "Pendampingan Surat Permintaan Penjelasan Data dan/atau Informasi (SP2DK)"
                                            )}
                                        />
                                    </ListItemButton>
                                </>
                            ) : category.id === 3 ? (
                                <>
                                    <ListItemButton
                                        component="a"
                                        href={checkLang(
                                            locale,
                                            route("tax-planning"),
                                            route("tax-planning.id"),
                                            route("tax-planning.jp"),
                                            route("tax-planning.ch")
                                        )}
                                        key={`${index}-listitembutton`}
                                        sx={{
                                            pl: 1,
                                            justifyContent: "start",
                                            gap: 1,
                                        }}
                                    >
                                        <Box>
                                            <MdExpandMore />
                                        </Box>
                                        <ListItemText
                                            primary={checkLang(
                                                locale,
                                                "Tax Planning",
                                                "Perencanaan Pajak"
                                            )}
                                        />
                                    </ListItemButton>
                                </>
                            ) : (
                                ""
                            )}
                            {category.services.map((service, index) => (
                                <>
                                    <ListItemButton
                                        component="a"
                                        href={checkLang(
                                            locale,
                                            route(
                                                "service-detail",
                                                service.slug_eng
                                            ),
                                            route(
                                                "service-detail.id",
                                                service.slug
                                            ),
                                            route(
                                                "service-detail.jp",
                                                service.slug_jpn
                                            ),
                                            route(
                                                "service-detail.ch",
                                                service.slug_ch
                                            )
                                        )}
                                        key={`${index}-listitembutton3`}
                                        sx={{
                                            pl: 1,
                                            justifyContent: "start",
                                            gap: 1,
                                        }}
                                    >
                                        <Box>
                                            <MdExpandMore />
                                        </Box>
                                        <ListItemText
                                            primary={checkLang(
                                                locale,
                                                service.title_eng,
                                                service.title,
                                                service.title_jp,
                                                service.title_ch
                                            )}
                                        />
                                    </ListItemButton>
                                </>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            ))}
            {unCategorized.map((service) => (
                <AccordionSummary
                    component="a"
                    href={checkLang(
                        locale,
                        route("service-detail", service.slug_eng),
                        route("service-detail.id", service.slug),
                        route("service-detail.jp", service.slug_jpn),
                        route("service-detail.ch", service.slug_ch)
                    )}
                    sx={{
                        borderTop: `1px solid rgba(0,0,0,0.2)`,
                        "&:hover": {
                            span: {
                                color: theme.palette.custom.orange,
                            },
                        },
                    }}
                >
                    <Typography
                        component="span"
                        sx={{
                            transition: "color 200ms",
                        }}
                    >
                        {checkLang(
                            locale,
                            service.title_eng,
                            service.title,
                            service.title_jp,
                            service.title_ch
                        )}
                    </Typography>
                </AccordionSummary>
            ))}
        </Box>
    );
}

export default ServiceAccordion;
