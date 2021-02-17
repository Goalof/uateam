import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "overflow-y": "hidden"
    },
    "index": {
        "overflow-y": "hidden"
    },
    "vacancies": {
        "overflow-y": "hidden"
    },
    "uteam": {
        "overflow-y": "hidden"
    },
    "resume": {
        "overflow-y": "hidden"
    },
    "contacts": {
        "overflow-y": "hidden"
    },
    "vacancies/pr-menedzher": {
        "overflow-y": "hidden"
    },
    "vacancies/back-end-razrabotchik-php": {
        "overflow-y": "hidden"
    },
    "vacancies/specialist-po-seo-optimizacii-sajtov": {
        "overflow-y": "hidden"
    },
    "vacancies/sborka-sajtov-na-konstruktore-sajtov-ukit": {
        "overflow-y": "hidden"
    },
    "vacancies/sborshik-sajtov-na-konstruktorah-ucozuweb": {
        "overflow-y": "hidden"
    },
    "vacancies/junior-nodejs-razrabotchik": {
        "overflow-y": "hidden"
    },
    "vacancies/menedzher-dizajner-shablonov": {
        "overflow-y": "hidden"
    },
    "vacancies/specialist-sluzhby-tehnicheskoj-podderzhki": {
        "overflow-y": "hidden"
    },
    "vacancies/senior-nodejs-engineer": {
        "overflow-y": "hidden"
    },
    "vacancies/programmist-perl": {
        "overflow-y": "hidden"
    },
    "vacancies/specialist-sluzhby-tehnicheskoj-podderzhki1": {
        "overflow-y": "hidden"
    },
    "vacancies/pr-menedzher1": {
        "overflow-y": "hidden"
    },
    "vacancies/technology-evangelistdeveloper-advocate": {
        "overflow-y": "hidden"
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
