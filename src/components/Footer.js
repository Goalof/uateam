import React from "react";
import { useOverrides, Override, StackItem, Stack, Section } from "@quarkly/components";
import { Image, Link, Text, Box, Icon } from "@quarkly/widgets";
import { FaVk, FaFacebookF, FaTwitter, FaInstagram, FaOdnoklassniki } from "react-icons/fa";
const defaultProps = {
	"className": "noprint",
	"quarkly-title": "Footer",
	"padding": "0px 0px 0px 0px",
	"border-width": "2px 0px 0px 0px",
	"border-style": "solid",
	"border-color": "#dbe6f4",
	"transition": "all 400ms ease 0s",
	"lg-padding": "10px 0px 10px 0px"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"margin": "0px 0px 0px 0px",
			"gap": "0px"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "70%",
			"display": "flex",
			"lg-width": "100%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "flex-end",
			"padding": "13px 30px 14px 30px"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"align-items": "center",
			"lg-flex-direction": "column",
			"lg-width": "100%"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://screenshot.ukit.com/src/goalov/21/2021-01-27-03-36-00.png",
			"color": "#ffffff",
			"width": "121px",
			"height": "40px",
			"margin": "3px 10px 3px 3px",
			"padding": "0px 0px 0px 0px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif",
			"margin": "3px 0px 0px 22px",
			"display": "inline-block",
			"color": "#9BABBF",
			"lg-margin": "10px 0px 0px 0px",
			"children": <Link
				href="https://blog.ucoz.ru/"
				color="#AEC1D9"
				text-decoration-line="initial"
				hover-color="#4a8cfa"
				transition="color 0.2s ease 0s"
				font="400 14px/19px 'AvenirNextCyrMedium'"
				target="_blank"
				lg-padding="0px 0px 0px 0px"
				lg-margin="0px 0px 0px 0px"
			>
				Блог компании
			</Link>
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif",
			"margin": "3px 0px 0px 22px",
			"display": "inline-block",
			"color": "#9BABBF",
			"lg-margin": "10px 0px 0px 0px",
			"children": <Link
				href="http://www.ucoz.ru/all/"
				color="#AEC1D9"
				text-decoration-line="initial"
				hover-color="#4a8cfa"
				transition="color 0.2s ease 0s"
				font="400 14px/19px 'AvenirNextCyrMedium'"
				target="_blank"
				lg-padding="0px 0px 0px 0px"
				lg-margin="0px 0px 0px 0px"
			>
				Наши проекты
			</Link>
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif",
			"margin": "3px 0px 0px 22px",
			"display": "inline-block",
			"color": "#9BABBF",
			"lg-margin": "10px 0px 0px 0px",
			"children": <Link
				href="http://ua.uteam.pro/"
				color="#4a8cfa"
				text-decoration-line="initial"
				hover-color="#3d72cc"
				transition="color 0.2s ease 0s"
				font="300 14px/19px 'AvenirNextCyrMedium'"
				lg-padding="0px 0px 0px 0px"
				lg-margin="0px 0px 0px 0px"
			>
				Вакансії в Україні{" "}
			</Link>
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"font": "normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif",
			"margin": "3px 0px 0px 22px",
			"display": "inline-block",
			"color": "#9BABBF",
			"lg-margin": "10px 0px 0px 0px",
			"children": <Link
				href="http://en.uteam.pro/"
				color="#4a8cfa"
				text-decoration-line="initial"
				hover-color="#3d72cc"
				transition="color 0.2s ease 0s"
				font="300 14px/19px 'AvenirNextCyrMedium'"
				lg-padding="0px 0px 0px 0px"
				lg-margin="0px 0px 0px 0px"
			>
				Applying from overseas
			</Link>
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "30%",
			"display": "flex",
			"lg-width": "100%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"padding": "13px 30px 14px 30px",
			"justify-content": "flex-end",
			"lg-justify-content": "center"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "https://www.facebook.com/ucoz",
			"target": "_blank",
			"margin": "0px 15px 0px 0px",
			"border-color": "#AFC1D8",
			"color": "#AFC1D8",
			"border-radius": "50%",
			"border-width": "2px",
			"border-style": "solid",
			"hover-background": "#4a8cfa",
			"hover-color": "#ffffff",
			"hover-border-color": "#4a8cfa"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaVk,
			"border-radius": "50%",
			"padding": "5px 5px 5px 5px",
			"transition": "all 0.2s linear 0s",
			"size": "20px",
			"hover-color": "inherit",
			"color": "inherit"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "https://www.facebook.com/ucoz",
			"target": "_blank",
			"margin": "0px 15px 0px 0px",
			"border-color": "#AFC1D8",
			"color": "#AFC1D8",
			"border-radius": "50%",
			"border-width": "2px",
			"border-style": "solid",
			"hover-background": "#4a8cfa",
			"hover-color": "#ffffff",
			"hover-border-color": "#4a8cfa"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaFacebookF,
			"border-radius": "50%",
			"padding": "5px 5px 5px 5px",
			"transition": "all 0.2s linear 0s",
			"size": "20px",
			"hover-color": "inherit",
			"color": "inherit"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"href": "https://twitter.com/ucoz_ru",
			"target": "_blank",
			"margin": "0px 15px 0px 0px",
			"border-color": "#AFC1D8",
			"color": "#AFC1D8",
			"border-radius": "50%",
			"border-width": "2px",
			"border-style": "solid",
			"hover-background": "#4a8cfa",
			"hover-color": "#ffffff",
			"hover-border-color": "#4a8cfa"
		}
	},
	"icon2": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaTwitter,
			"border-radius": "50%",
			"padding": "5px 5px 5px 5px",
			"transition": "all 0.2s linear 0s",
			"size": "20px",
			"hover-color": "inherit",
			"color": "inherit"
		}
	},
	"link4": {
		"kind": "Link",
		"props": {
			"href": "https://instagram.com/ucoz_ru",
			"target": "_blank",
			"margin": "0px 15px 0px 0px",
			"border-color": "#AFC1D8",
			"color": "#AFC1D8",
			"border-radius": "50%",
			"border-width": "2px",
			"border-style": "solid",
			"hover-background": "#4a8cfa",
			"hover-color": "#ffffff",
			"hover-border-color": "#4a8cfa"
		}
	},
	"icon3": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaInstagram,
			"border-radius": "50%",
			"padding": "5px 5px 5px 5px",
			"transition": "all 0.2s linear 0s",
			"size": "20px",
			"hover-color": "inherit",
			"color": "inherit"
		}
	},
	"link5": {
		"kind": "Link",
		"props": {
			"href": "http://ok.ru/ucozru",
			"target": "_blank",
			"margin": "0px 15px 0px 0px",
			"border-color": "#AFC1D8",
			"color": "#AFC1D8",
			"border-radius": "50%",
			"border-width": "2px",
			"border-style": "solid",
			"hover-background": "#4a8cfa",
			"hover-color": "#ffffff",
			"hover-border-color": "#4a8cfa"
		}
	},
	"icon4": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaOdnoklassniki,
			"border-radius": "50%",
			"padding": "5px 5px 5px 5px",
			"transition": "all 0.2s linear 0s",
			"size": "20px",
			"hover-color": "inherit",
			"color": "inherit"
		}
	}
};

const Foooter = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" max-width="1170px" width="100%" />
		<Stack {...override("stack")}>
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				{"        "}
				<Box {...override("box")}>
					<Link {...override("link")}>
						<Image {...override("image")} />
					</Link>
					<Text {...override("text")} />
					<Text {...override("text1")} />
					<Text {...override("text2")} />
					<Text {...override("text3")} />
				</Box>
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				<Link {...override("link1")}>
					<Icon {...override("icon")} />
				</Link>
				<Link {...override("link2")}>
					<Icon {...override("icon1")} />
				</Link>
				<Link {...override("link3")}>
					<Icon {...override("icon2")} />
				</Link>
				<Link {...override("link4")}>
					<Icon {...override("icon3")} />
				</Link>
				<Link {...override("link5")}>
					<Icon {...override("icon4")} />
				</Link>
				{"        "}
			</StackItem>
			{"        "}
		</Stack>
		{children}
	</Section>;
};

Object.assign(Foooter, { ...Section,
	defaultProps,
	overrides
});
export default Foooter;