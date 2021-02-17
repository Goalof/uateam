import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section, GoogleMap } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"contacts"} />
		<Helmet>
			<title>
				Контакт - Работа в uTeam
			</title>
			<meta name={"description"} content={"Вакансии в uCoz. Все вакансии компании по направлениям и проектам. В офисах в Москве, Санкт-Петербурге, Ростове-на-Дону. Удаленная работа."} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header />
		<Section padding="150px 0 80px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/1.jpg?v=2021-01-28T13:22:17.962Z) 0% 0% /cover repeat scroll padding-box">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="850px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="normal 900 64px/1.2 'AvenirNextCyrDemi', sans-serif"
						margin="0px 0px 5px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="center"
						color="#ffffff"
					>
						Контакты
						<br />
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="30px 0 40px 0" sm-padding="40px 0 40px 0" lg-padding="40px 0 40px 0" md-padding="40px 0 40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="1170px" width="100%">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" />
					{"        "}
					<Text
						font="normal 400 36px/36px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="center"
						color="#263238"
					>
						Мы будем рады видеть вас!
						<br />
					</Text>
					<Text
						font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="18px 0px 0px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						color="#333"
					>
						Убедительная просьба сообщать о визите заранее
						<br />
					</Text>
					<GoogleMap query="г.Черкассы, ул. Добровольского 1" margin="25px 0px 0px 0px" z-index="0" sm-margin="15px 0px 20px 0px" />
					<Box display="flex" margin="0px 0px 25px 0px" sm-flex-direction="column">
						<Box
							display="flex"
							flex-direction="column"
							align-items="flex-start"
							max-width="270px"
							width="100%"
						>
							<Text
								font="normal 400 18px/22px 'AvenirNextCyrMedium'"
								margin="20px 0px 17px 0px"
								display="inline-block"
								sm-margin="0px 0px 30px 0px"
								text-align="center"
								color="#333"
							>
								Прийти
							</Text>
							<Text
								font="normal 400 18px/22px 'AvenirNextCyrMedium'"
								display="inline-block"
								sm-margin="0px 0px 30px 0px"
								color="#333"
								margin="0px 0px 0px 0px"
							>
								г.Черкассы, ул. Добровольского 1, БЦ «Комфорт», 3 этаж{"\n\n"}
							</Text>
						</Box>
						<Box display="flex" flex-direction="column" align-items="flex-start" max-width="300px">
							<Text
								font="normal 400 18px/22px 'AvenirNextCyrMedium'"
								display="inline-block"
								sm-text-align="center"
								sm-margin="0px 0px 30px 0px"
								text-align="center"
								color="#333"
								margin="20px 0px 17px 0px"
							>
								Написать
								<Link href="mailto:job@ucoz.ru">
									<br />
								</Link>
							</Text>
							<Link
								href="malito:job@ucoz.ru"
								text-decoration-line="initial"
								color="#4a8cfa"
								font="normal 400 18px/24px 'AvenirNextCyrMedium'"
								transition="color 0.2s linear 0s"
								hover-color="#3d72cc"
							>
								job@ucoz.ua
							</Link>
						</Box>
					</Box>
					<Link
						href="/vacancies"
						background="#ffd83a"
						text-decoration-line="initial"
						color="#263238"
						font="16px/50px 'AvenirNextCyrMedium', sans-serif"
						padding="0px 15px 0px 15px"
						margin="0px 0px 0px 0px"
						transition="all 0.2s linear 0s"
						hover-background="#e6c235"
						border-radius="5px"
					>
						Смотреть все вакансии
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="30px 0px 0px 0px" max-width="1170px" width="100%">
				{"    "}
				<StackItem width="100%" display="none">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" />
					{"        "}
					<Text
						font="normal 400 36px/36px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="center"
						color="#263238"
					>
						Документы
						<br />
					</Text>
					<Text
						font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="18px 0px 25px 0px"
						display="inline-block"
						sm-margin="0px 0px 30px 0px"
						text-align="left"
						color="#333"
						sm-font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif"
					>
						Согласно ФЗ от 28 декабря 2013 г. N 426-ФЗ «О специальной оценке условий труда» статья 15 п.6. мы публикуем результаты специальной оценки условий труда в наших офисах
						<br />
					</Text>
					<Link
						href="/documents/Exp_opinion_2018.pdf"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							Заключение эксперта по результатам проведения оценки условий труда в московском офисе
						</Text>
					</Link>
					<Link
						href="/documents/list_of_measures_spb_2018.pdf"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							Перечень мероприятий по улучшению условий труда в санкт-петербургском офисе
						</Text>
					</Link>
					<Link
						href="/documents/Summary_list_msk_2018.pdf"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							Сводная ведомость результатов проведения условий труда в московском офисе
						</Text>
					</Link>
					<Link
						href="http://ru.uteam.pro/resources/documents/Summary_list_spb_2018.pdf"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							Сводная ведомость результатов проведения условий труда в санкт-пербургском офисе
						</Text>
					</Link>
					<Link
						href="/documents/event_list_msk.pdf"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							Перечень мероприятий по улучшению условий труда в московском офисе (2017)
						</Text>
					</Link>
					<Link
						href="/documents/event_list_spb.pdf"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							Перечень мероприятий по улучшению условий труда в санкт-петербургском офисе (2017)
						</Text>
					</Link>
					<Link
						href="/documents/results_msk.pdf"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							Сводная ведомость результатов проведения оценки условий труда в московском офисе (2017)
						</Text>
					</Link>
					<Link
						href="/documents/results_spb.pdf"
						display="flex"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						hover-color="#5F99FB"
						color="#333"
						margin="0px 0px 12px 0px"
						lg-margin="0px 0px 16px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						<Image
							width="24px"
							height="24px"
							margin="1px 12px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/document.svg?v=2021-01-28T21:23:13.010Z"
							lg-margin="3px 12px 0px 0px"
						/>
						<Text
							font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
							margin="0px 0px 0px 0px"
							display="inline-block"
							sm-margin="0px 0px 30px 0px"
							text-align="left"
							color="inherit"
							lg-font="normal 400 20px/30px 'AvenirNextCyrRegular', sans-serif"
							sm-font="normal 400 16px/30px 'AvenirNextCyrRegular', sans-serif"
						>
							Сводная ведомость результатов проведения оценки условий труда в санкт-петербургском офисе (2017)
						</Text>
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.Footer />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"602d7555f92d7afdd8bf256a"}>
				{"* {\n    scroll-behavior: smooth;\n    }\n    .active .fileText {\n    display: none;\n    }\n    input.fileText {\n        opacity: 1 !important;\n    }\n    * {\n      -webkit-tap-highlight-color: transparent!important;\n    }\n    @font-face {\n      font-family: 'AvenirNextCyrRegular';\n      src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.eot');\n      src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.eot?#iefix') format('embedded-opentype'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.woff') format('woff'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.ttf') format('truetype');\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: 'AvenirNextCyrMedium';\n      src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.eot');\n      src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.eot?#iefix') format('embedded-opentype'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.woff') format('woff'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.ttf') format('truetype');\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: 'AvenirNextCyrBold';\n      src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.eot');\n      src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.eot?#iefix') format('embedded-opentype'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.woff') format('woff'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.ttf') format('truetype');\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: 'AvenirNextCyrDemi';\n      src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Demi.otf');\n      font-weight: normal;\n      font-style: normal;\n      font-display: swap;\n    }\n    body {\n      font-family: 'AvenirNextCyrRegular', sans-serif;\n      font-weight: normal;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }"}
			</style>
		</RawHtml>
	</Theme>;
});