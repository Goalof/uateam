import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "index": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "uteam": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "resume": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "contacts": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/pr-menedzher": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/back-end-razrabotchik-php": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/specialist-po-seo-optimizacii-sajtov": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/sborka-sajtov-na-konstruktore-sajtov-ukit": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/sborshik-sajtov-na-konstruktorah-ucozuweb": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/junior-nodejs-razrabotchik": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/menedzher-dizajner-shablonov": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/specialist-sluzhby-tehnicheskoj-podderzhki": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/senior-nodejs-engineer": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/programmist-perl": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/specialist-sluzhby-tehnicheskoj-podderzhki1": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/pr-menedzher1": {
        "overflow-y": "",
        "overflow-x": "hidden"
    },
    "vacancies/technology-evangelistdeveloper-advocate": {
        "overflow-y": "",
        "overflow-x": "hidden"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
