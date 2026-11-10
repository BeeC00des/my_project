import { r as __toESM } from "../_runtime.mjs";
import { m as SITE, n as BASELINE, v as whatsappLink } from "./site-DGtN9-jT.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { K as redirect, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useLocation, v as createFileRoute, x as useRouter, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Linkedin, E as Mail, M as Instagram, T as Menu, V as Facebook, Y as ChevronDown, s as Twitter, t as X, w as MessageCircle } from "../_libs/lucide-react.mjs";
import { c as cn, r as Logo, t as Button } from "./primitives-DZ3UawNy.mjs";
import { t as supabase } from "./client-DFJbzuNn.mjs";
import { t as Route$23 } from "./admin-B04Cejq-.mjs";
import { i as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { a as DialogTitle, n as DialogContent, o as careServicesQuery, r as DialogDescription, t as Dialog } from "./care-queries-LVs-ROLs.mjs";
import { a as openAvailability, i as markVisitor, n as canAutoShow, o as readVisitor, r as markEngaged, t as AVAILABILITY_DELAY_MS } from "./visitor-engagement-B7t0jAdy.mjs";
import { n as Honeypot, s as validate, t as FieldGrid } from "./FormKit-B4tUv92B.mjs";
import { t as seo } from "./seo-Cfstf6d3.mjs";
import { t as Route$24 } from "./checkout-BdY04dzM.mjs";
import { t as Route$25 } from "./get-started-DGRYZa-G.mjs";
import { t as Route$26 } from "./resources._slug-EGuFZlYV.mjs";
import { t as Route$27 } from "./routes-C6RfEGks.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cb1zWVd0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BEQlw0vZ.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
var familyLinks = [
	{
		to: "/get-started",
		label: "Get started"
	},
	{
		to: "/talk-to-your-parent",
		label: "How to talk to your parent"
	},
	{
		to: "/share",
		label: "Share with your siblings"
	},
	{
		to: "/refer",
		label: "Refer a family"
	},
	{
		to: "/faq",
		label: "FAQ"
	}
];
var workLinks = [
	{
		to: "/join/nurses",
		label: "Registered Nurses"
	},
	{
		to: "/join/doctors",
		label: "Doctors"
	},
	{
		to: "/join/caregivers",
		label: "Caregivers"
	},
	{
		to: "/join/physiotherapists",
		label: "Physiotherapists"
	},
	{
		to: "/partners",
		label: "Partner with us"
	},
	{
		to: "/employers",
		label: "For employers"
	}
];
var mainBefore = [
	{
		to: "/how-it-works",
		label: "How it works"
	},
	{
		to: "/plans",
		label: "Plans"
	},
	{
		to: "/care-on-request",
		label: "Care on request"
	},
	{
		to: "/care-team",
		label: "Our care team"
	}
];
var mainAfter = [
	{
		to: "/resources",
		label: "Resources"
	},
	{
		to: "/store",
		label: "Store"
	},
	{
		to: "/about",
		label: "About"
	}
];
function Dropdown({ label, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "ghost",
			className: "flex items-center gap-1 rounded-full px-3 py-2 text-[15px] font-medium hover:text-primary focus-visible:outline-2 focus-visible:outline-ring",
			"aria-haspopup": "true",
			children: [
				label,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: "size-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180",
					"aria-hidden": true
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "w-64 rounded-2xl border bg-card p-2 shadow-lift",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					className: "block rounded-xl px-3 py-2 text-[15px] hover:bg-primary-soft hover:text-primary",
					children: l.label
				}) }, l.to))
			})
		})]
	});
}
function MobileGroup({ label, links, onNavigate }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "ghost",
			className: "flex w-full items-center justify-between py-4 text-lg font-medium",
			"aria-expanded": open,
			onClick: () => setOpen(!open),
			children: [
				label,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: cn("size-5 transition-transform", open && "rotate-180"),
					"aria-hidden": true
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "pb-3 pl-3",
			children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: l.to,
				onClick: onNavigate,
				className: "block py-2 text-muted-foreground",
				children: l.label
			}) }, l.to))
		})]
	});
}
function Header() {
	const headerRef = (0, import_react.useRef)(null);
	const [headerHeight, setHeaderHeight] = (0, import_react.useState)(80);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
	}, [open]);
	const close = () => setOpen(false);
	(0, import_react.useEffect)(() => {
		const header = headerRef.current;
		if (!header) return;
		const observer = new ResizeObserver(() => setHeaderHeight(header.getBoundingClientRect().height));
		observer.observe(header);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		ref: headerRef,
		className: cn("sticky top-0 z-40 border-b transition-all", scrolled ? "border-border bg-background/95 shadow-soft backdrop-blur" : "border-transparent bg-background"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("container-page flex flex-wrap items-center justify-between transition-all sm:flex-nowrap", scrolled ? "min-h-16" : "min-h-20"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-0 max-sm:[&_span]:hidden max-sm:[&_img]:size-9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "order-last flex w-full flex-wrap items-center justify-center pb-2 sm:order-none sm:w-auto sm:flex-nowrap sm:pb-0",
					"aria-label": "Main",
					children: [mainBefore.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "rounded-full px-1.5 py-2 text-sm font-medium hover:text-primary xl:px-3 xl:text-[15px]",
						activeProps: { className: "text-primary" },
						children: l.label
					}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center 2xl:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dropdown, {
								label: "For families",
								links: familyLinks
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dropdown, {
								label: "Work with us",
								links: workLinks
							}),
							mainAfter.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: "rounded-full px-3 py-2 text-[15px] font-medium hover:text-primary",
								activeProps: { className: "text-primary" },
								children: l.label
							}, l.to))
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-2 2xl:ml-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "cta",
						onClick: () => {
							close();
							openAvailability();
						},
						className: "hidden h-auto min-h-10 whitespace-normal px-3 text-sm sm:inline-flex",
						children: "Check availability"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "hidden lg:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/get-started",
							children: "Get started"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "grid size-11 place-items-center rounded-full 2xl:hidden",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen(!open),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-background 2xl:hidden",
			style: { top: headerHeight },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "container-page flex min-h-full flex-col pb-8",
				"aria-label": "Mobile",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileGroup, {
						label: "For families",
						links: familyLinks,
						onNavigate: close
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileGroup, {
						label: "Work with us",
						links: workLinks,
						onNavigate: close
					}),
					mainAfter.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						onClick: close,
						className: "border-b py-4 text-lg font-medium",
						children: l.label
					}, l.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "cta",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/get-started",
								onClick: close,
								children: "Get started"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: whatsappLink(),
								target: "_blank",
								rel: "noopener noreferrer",
								children: "Talk to us on WhatsApp"
							})
						})]
					})
				]
			})
		})]
	});
}
var cols = [
	{
		title: "Families",
		links: [
			["/how-it-works", "How it works"],
			["/plans", "Plans"],
			["/get-started", "Get started"],
			["/refer", "Refer a family"],
			["/faq", "FAQ"]
		]
	},
	{
		title: "Work with us",
		links: [
			["/join/nurses", "Nurses"],
			["/join/doctors", "Doctors"],
			["/join/caregivers", "Caregivers"],
			["/partners", "Partner with us"],
			["/employers", "For employers"]
		]
	},
	{
		title: "Company",
		links: [
			["/about", "About"],
			["/resources", "Resources"],
			["/store", "Store"],
			["/privacy", "Privacy policy"],
			["/terms", "Terms of service"],
			["/service-agreement", "Service agreement"]
		]
	}
];
function WaitlistBox() {
	const [city, setCity] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [hp, setHp] = (0, import_react.useState)("");
	const [state, setState] = (0, import_react.useState)("idle");
	const [err, setErr] = (0, import_react.useState)("");
	async function submit(e) {
		e.preventDefault();
		if (hp) return setState("done");
		if (!city.trim()) return setErr("Please tell us the city.");
		if (!/^\S+@\S+\.\S+$/.test(email)) return setErr("Please enter a valid email.");
		setErr("");
		setState("sending");
		const { error } = await supabase.from("waitlist").insert({
			email,
			parent_city: city.trim()
		});
		if (!error) markEngaged();
		setState(error ? "error" : "done");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-primary-foreground/10 p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-lg",
				children: "Want care in your city?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm opacity-80",
				children: "Tell us where they live. We’ll notify you when local care is available."
			}),
			state === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm font-medium",
				role: "status",
				children: "Thank you. We'll let you know as soon as we're there."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "mt-4 grid gap-2",
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						tabIndex: -1,
						autoComplete: "off",
						value: hp,
						onChange: (e) => setHp(e.target.value),
						className: "hidden",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "sr-only",
						htmlFor: "wl-city",
						children: "City"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "wl-city",
						placeholder: "City, e.g. Ibadan",
						value: city,
						onChange: (e) => setCity(e.target.value),
						className: "h-11 rounded-xl bg-background px-3 text-foreground"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "sr-only",
						htmlFor: "wl-email",
						children: "Email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "wl-email",
						type: "email",
						placeholder: "Your email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						className: "h-11 rounded-xl bg-background px-3 text-foreground"
					}),
					err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-gold",
						role: "alert",
						children: err
					}),
					state === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-gold",
						role: "alert",
						children: "Something went wrong. Please try again."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "cta",
						disabled: state === "sending",
						children: state === "sending" ? "Joining..." : "Join the waitlist"
					})
				]
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-primary text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-7 py-14 md:grid-cols-2 xl:grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr_1.2fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { light: true }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[15px] opacity-85",
						children: "Verified nurses and doctor-led care for older parents in Nigeria, for families who live abroad."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-2 text-[15px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "flex items-center gap-2 hover:underline",
							href: `mailto:${SITE.email}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "size-4",
									"aria-hidden": true
								}),
								" ",
								SITE.email
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "flex items-center gap-2 hover:underline",
							href: whatsappLink(),
							target: "_blank",
							rel: "noopener noreferrer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
									className: "size-4",
									"aria-hidden": true
								}),
								" ",
								SITE.whatsappDisplay
							]
						}) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.social.facebook,
								"aria-label": "MyCareEnvoy on Facebook",
								className: "grid size-10 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.social.instagram,
								"aria-label": "MyCareEnvoy on Instagram",
								className: "grid size-10 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.social.linkedin,
								"aria-label": "MyCareEnvoy on LinkedIn",
								className: "grid size-10 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.social.twitter,
								"aria-label": "MyCareEnvoy on X",
								className: "grid size-10 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "size-5" })
							})
						]
					})
				] }),
				cols.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-lg",
					children: c.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-[15px] opacity-85",
					children: c.links.map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to,
						className: "hover:underline",
						children: label
					}) }, to))
				})] }, c.title)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaitlistBox, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-primary-foreground/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page space-y-1 py-6 text-sm opacity-75",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "MyCareEnvoy is a product and service of PadiHealth Ltd, a company registered in Nigeria." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 PadiHealth Ltd. All rights reserved." })]
			})
		})]
	});
}
function WhatsAppFab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: whatsappLink(),
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat with MyCareEnvoy on WhatsApp",
		className: "fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-foreground shadow-lift transition-transform hover:scale-105",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-7",
			fill: "currentColor",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 1 1 7.99 4.42m8.02-17.45A11.27 11.27 0 0 0 12.05.75 11.3 11.3 0 0 0 2.27 17.68L.66 23.25l5.7-1.5a11.28 11.28 0 0 0 5.69 1.45h.01A11.3 11.3 0 0 0 20.07 4.05" })
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var fields = [
	{
		name: "name",
		label: "Your name",
		type: "text",
		required: true
	},
	{
		name: "email",
		label: "Email",
		type: "email",
		required: true
	},
	{
		name: "whatsapp",
		label: "WhatsApp number with country code",
		type: "tel",
		required: true,
		full: true
	},
	{
		name: "country",
		label: "Country you live in",
		type: "select",
		required: true,
		options: [
			"United States",
			"United Kingdom",
			"Canada",
			"Other"
		]
	},
	{
		name: "parent_location",
		label: "Parent's location",
		type: "select",
		required: true,
		options: [{
			value: "lagos",
			label: "Lagos"
		}, {
			value: "other",
			label: "Somewhere else"
		}]
	},
	{
		name: "parent_city",
		label: "Which city or town?",
		type: "text",
		required: true,
		showIf: (v) => v["parent_location"] === "other"
	}
];
function AvailabilityPopup() {
	const { pathname } = useLocation();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [values, setValues] = (0, import_react.useState)({});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const [fail, setFail] = (0, import_react.useState)("");
	const [hp, setHp] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (["/get-started", "/checkout"].includes(pathname)) {
			markEngaged();
			setOpen(false);
		}
		const show = () => {
			markVisitor({ shown: true });
			setOpen(true);
		};
		const auto = () => {
			if (canAutoShow(readVisitor(), pathname) && !document.querySelector("[role=\"dialog\"]")) show();
		};
		const scroll = () => {
			const distance = document.documentElement.scrollHeight - window.innerHeight;
			if (distance > 0 && window.scrollY / distance >= .5) auto();
		};
		const exit = (e) => {
			if (e.clientY <= 0 && !e.relatedTarget && window.matchMedia("(hover: hover) and (pointer: fine)").matches) auto();
		};
		const timer = window.setTimeout(auto, AVAILABILITY_DELAY_MS);
		window.addEventListener("open-availability", show);
		window.addEventListener("scroll", scroll, { passive: true });
		document.addEventListener("mouseout", exit);
		return () => {
			clearTimeout(timer);
			window.removeEventListener("open-availability", show);
			window.removeEventListener("scroll", scroll);
			document.removeEventListener("mouseout", exit);
		};
	}, [pathname]);
	async function submit(e) {
		e.preventDefault();
		const errs = validate(fields, values);
		setErrors(errs);
		if (Object.values(errs).some(Boolean)) return;
		if (hp) {
			markEngaged();
			setDone(true);
			return;
		}
		setBusy(true);
		setFail("");
		try {
			const { error } = await supabase.from("leads").insert({
				name: String(values["name"]).trim(),
				email: String(values["email"]).trim(),
				whatsapp_number: String(values["whatsapp"]),
				country: String(values["country"]),
				parent_location: String(values["parent_location"]),
				parent_city: values["parent_location"] === "other" ? String(values["parent_city"]).trim() : "Lagos",
				source: "popup"
			});
			if (error) throw error;
			markEngaged();
			setDone(true);
		} catch {
			setFail("We couldn't send your details. Please try again.");
		} finally {
			setBusy(false);
		}
	}
	const lagos = values["parent_location"] === "lagos";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90dvh] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-lg bg-cream p-5 pt-16 sm:p-8 sm:pt-16 [&>button]:grid [&>button]:size-12 [&>button]:place-items-center [&>button]:rounded-full [&>button]:border [&>button]:bg-card [&>button]:opacity-100 [&>button>svg]:size-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "font-serif text-3xl leading-tight text-primary",
					children: done ? lagos ? "Great news, we're there!" : `Thank you! You're on the list for ${String(values["parent_city"])}.` : "Is Mum or Dad back home?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "text-base",
					children: done ? lagos ? "You can book your parent's baseline assessment now, or we'll message you on WhatsApp within 24 hours to answer any questions." : "We're not there yet, but we're growing. You'll be among the first to know when we arrive." : "Tell us where they live. We'll let you know how we can help, usually within 24 hours."
				}),
				done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-3",
					children: lagos ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "cta",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/get-started",
							onClick: () => setOpen(false),
							children: "Book the baseline ($40)"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappLink("Hi MyCareEnvoy, I'd like to learn more about care for my parent in Lagos."),
							target: "_blank",
							rel: "noopener noreferrer",
							children: "Chat on WhatsApp"
						})
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "cta",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `https://wa.me/?text=${encodeURIComponent(`MyCareEnvoy helps families abroad care for their parents in Nigeria. Check availability for your parent's city: ${SITE.url}`)}`,
							target: "_blank",
							rel: "noopener noreferrer",
							children: "Share on WhatsApp"
						})
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					noValidate: true,
					className: "relative space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Honeypot, {
							value: hp,
							onChange: setHp
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGrid, {
							fields,
							values,
							errors,
							setValue: (key, value) => {
								setValues((v) => ({
									...v,
									[key]: value
								}));
								setErrors((v) => ({
									...v,
									[key]: ""
								}));
							}
						}),
						fail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "text-destructive",
							children: fail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "cta",
							type: "submit",
							disabled: busy,
							className: "w-full",
							children: busy ? "Sending..." : "Check availability"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "No spam. We'll only contact you about care for your parent."
						})
					]
				})
			]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-6xl text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl",
					children: "We couldn't find that page"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: "It may have moved. Let's get you back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl text-primary",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: "Something went wrong on our end. You can try again or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-full border px-5 py-2.5 font-semibold",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$22 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "MyCareEnvoy | Nurse care for your parents in Nigeria" },
			{
				name: "description",
				content: "Verified registered nurses and doctor-led home care for older parents in Nigeria, with a report after every visit for families abroad."
			},
			{
				name: "theme-color",
				content: "#1F4D3A"
			},
			{
				property: "og:site_name",
				content: "MyCareEnvoy"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$22.useRouteContext();
	const { pathname } = useLocation();
	const isAdmin = pathname.startsWith("/admin");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [isAdmin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvailabilityPopup, {})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})]
	});
}
var $$splitComponentImporter$19 = () => import("./about-Ci1MpxDL.mjs");
var Route$21 = createFileRoute("/about")({
	head: () => seo("About MyCareEnvoy: built by a Nigerian doctor", "MyCareEnvoy was started by a Nigerian-trained physician in the diaspora to give families abroad trusted, verified care for their parents in Nigeria."),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./care-on-request-FNAM3U8B.mjs");
var Route$20 = createFileRoute("/care-on-request")({
	head: () => seo("Care on request in Nigeria", "Request vetted physiotherapy, home lab tests, medication delivery, specialist visits and hospital support for your parent in Nigeria. Costs confirmed before booking."),
	loader: ({ context }) => context.queryClient.ensureQueryData(careServicesQuery),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./care-team-DJ5pF9uj.mjs");
var Route$19 = createFileRoute("/care-team")({
	head: () => seo("Our care team: verified nurses and doctors in Nigeria", "Meet the registered nurses, doctors and caregivers who care for older adults at home, and see how we vet every one of them."),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./employers-DV44h9Wc.mjs");
var Route$18 = createFileRoute("/employers")({
	head: () => seo("MyCareEnvoy for employers: elder care benefit for Nigerian staff", "Offer MyCareEnvoy as an employee benefit for staff with parents in Nigeria. Less distraction, better retention, a benefit that stands out."),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./faq-CnwwA9J5.mjs");
var Route$17 = createFileRoute("/faq")({
	head: () => seo("FAQ: home nurse care for elderly parents in Nigeria", "Answers about MyCareEnvoy nurse visits, doctors, emergencies, billing, privacy and local availability."),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./how-it-works-CzhTlNa_.mjs");
var Route$16 = createFileRoute("/how-it-works")({
	head: () => seo("How MyCareEnvoy works: home nurse visits in Nigeria", "From your first call to regular nurse home visits and doctor-reviewed reports. See how MyCareEnvoy cares for your elderly parent in Nigeria."),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./partners-0o8hfmcB.mjs");
var Route$15 = createFileRoute("/partners")({
	head: () => seo("Partner with MyCareEnvoy: hospitals, labs and pharmacies in Nigeria", "Hospitals, clinics, labs, pharmacies and diagnostic centres in Nigeria: partner with MyCareEnvoy for referrals and coordinated care of older adults."),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./plans-Ba-TKPkS.mjs");
var Route$14 = createFileRoute("/plans")({
	head: () => seo("Plans and pricing for parent care in Nigeria", `MyCareEnvoy plans from $35/month. Free enrollment call, $${BASELINE.videoAmount} video baseline or $${BASELINE.amount} clinic/home assessment, annual savings and flexible add-ons.`),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./privacy-D9Urrfog.mjs");
var Route$13 = createFileRoute("/privacy")({
	head: () => seo("Privacy policy", "How MyCareEnvoy collects, uses and protects personal and health information, in line with the Nigeria Data Protection Act 2023."),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./refer-D3sH_Vgi.mjs");
var Route$12 = createFileRoute("/refer")({
	head: () => seo("Refer a family to MyCareEnvoy", "Know a family with a parent in Nigeria who could use a trusted nurse? Refer them to MyCareEnvoy."),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./service-agreement-DwEufPso.mjs");
var Route$11 = createFileRoute("/service-agreement")({
	head: () => seo("Service agreement", "What's included in MyCareEnvoy care plans, response times, what we don't do, and how cancellation works."),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./share-UYgRHfwr.mjs");
var Route$10 = createFileRoute("/share")({
	head: () => seo("Share MyCareEnvoy with your siblings", "A simple summary of MyCareEnvoy to send your brothers and sisters on WhatsApp or email, so you can decide on care for your parent together."),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./store-C37i0mnI.mjs");
var Route$9 = createFileRoute("/store")({
	head: () => seo("Store coming soon", "The MyCareEnvoy Store is coming soon. Stay connected with trusted care for your parent in Nigeria."),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./talk-to-your-parent-Bx3ZmXFi.mjs");
var Route$8 = createFileRoute("/talk-to-your-parent")({
	head: () => seo("How to talk to your parent about home care", "Our parents are proud. A practical guide for Nigerian families abroad on introducing a nurse in a way that feels like respect, not surveillance."),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./terms-BClk_tje.mjs");
var Route$7 = createFileRoute("/terms")({
	head: () => seo("Terms of service", "The terms that apply when you use the MyCareEnvoy website and subscribe to MyCareEnvoy care plans."),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./join.caregivers-B8Rhlh4f.mjs");
var Route$6 = createFileRoute("/join/caregivers")({
	head: () => seo("Caregiver jobs in Nigeria: elderly companionship", "Join MyCareEnvoy as a caregiver in Nigeria. Accompany older adults to hospital visits, help with errands and offer companionship."),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./join.doctors-CfUPSDzR.mjs");
var Route$5 = createFileRoute("/join/doctors")({
	head: () => seo("Doctor roles in elderly care, Nigeria", "Join MyCareEnvoy as a doctor in Nigeria: onboarding assessments, care plans, oversight of nurses and virtual consults for older adults."),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var Route$4 = createFileRoute("/join/lab-partners")({
	head: () => seo("Partner with MyCareEnvoy", "Labs partner with MyCareEnvoy through one partner form. Start on the Partner with us page."),
	beforeLoad: () => {
		throw redirect({ to: "/partners" });
	}
});
var $$splitComponentImporter$2 = () => import("./join.nurses-C6MA8fjl.mjs");
var Route$3 = createFileRoute("/join/nurses")({
	head: () => seo("Home care nursing jobs in Nigeria for registered nurses", "Join MyCareEnvoy as a registered nurse in Nigeria. Care for a small, consistent group of older adults at home, with doctor support and fair, on-time pay."),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var Route$2 = createFileRoute("/join/pharmacy-partners")({
	head: () => seo("Partner with MyCareEnvoy", "Pharmacies partner with MyCareEnvoy through one partner form. Start on the Partner with us page."),
	beforeLoad: () => {
		throw redirect({ to: "/partners" });
	}
});
var $$splitComponentImporter$1 = () => import("./join.physiotherapists-_J7H_fkh.mjs");
var Route$1 = createFileRoute("/join/physiotherapists")({
	head: () => seo("Physiotherapist applications in Nigeria", "Apply to provide vetted home physiotherapy for older adults in Nigeria with MyCareEnvoy."),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./resources.index-CtgxEUbk.mjs");
var Route = createFileRoute("/resources/")({
	head: () => seo("Resources: caring for elderly parents in Nigeria from abroad", "Practical guides on health, medications, hospital visits and family conversations for Nigerian families caring for parents from abroad."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$27.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$22
});
var AboutRoute = Route$21.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$22
});
var AdminRoute = Route$23.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$22
});
var CareOnRequestRoute = Route$20.update({
	id: "/care-on-request",
	path: "/care-on-request",
	getParentRoute: () => Route$22
});
var CareTeamRoute = Route$19.update({
	id: "/care-team",
	path: "/care-team",
	getParentRoute: () => Route$22
});
var CheckoutRoute = Route$24.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$22
});
var EmployersRoute = Route$18.update({
	id: "/employers",
	path: "/employers",
	getParentRoute: () => Route$22
});
var FaqRoute = Route$17.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$22
});
var GetStartedRoute = Route$25.update({
	id: "/get-started",
	path: "/get-started",
	getParentRoute: () => Route$22
});
var HowItWorksRoute = Route$16.update({
	id: "/how-it-works",
	path: "/how-it-works",
	getParentRoute: () => Route$22
});
var PartnersRoute = Route$15.update({
	id: "/partners",
	path: "/partners",
	getParentRoute: () => Route$22
});
var PlansRoute = Route$14.update({
	id: "/plans",
	path: "/plans",
	getParentRoute: () => Route$22
});
var PrivacyRoute = Route$13.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$22
});
var ReferRoute = Route$12.update({
	id: "/refer",
	path: "/refer",
	getParentRoute: () => Route$22
});
var ServiceAgreementRoute = Route$11.update({
	id: "/service-agreement",
	path: "/service-agreement",
	getParentRoute: () => Route$22
});
var ShareRoute = Route$10.update({
	id: "/share",
	path: "/share",
	getParentRoute: () => Route$22
});
var StoreRoute = Route$9.update({
	id: "/store",
	path: "/store",
	getParentRoute: () => Route$22
});
var TalkToYourParentRoute = Route$8.update({
	id: "/talk-to-your-parent",
	path: "/talk-to-your-parent",
	getParentRoute: () => Route$22
});
var TermsRoute = Route$7.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$22
});
var JoinCaregiversRoute = Route$6.update({
	id: "/join/caregivers",
	path: "/join/caregivers",
	getParentRoute: () => Route$22
});
var JoinDoctorsRoute = Route$5.update({
	id: "/join/doctors",
	path: "/join/doctors",
	getParentRoute: () => Route$22
});
var JoinLabPartnersRoute = Route$4.update({
	id: "/join/lab-partners",
	path: "/join/lab-partners",
	getParentRoute: () => Route$22
});
var JoinNursesRoute = Route$3.update({
	id: "/join/nurses",
	path: "/join/nurses",
	getParentRoute: () => Route$22
});
var JoinPharmacyPartnersRoute = Route$2.update({
	id: "/join/pharmacy-partners",
	path: "/join/pharmacy-partners",
	getParentRoute: () => Route$22
});
var JoinPhysiotherapistsRoute = Route$1.update({
	id: "/join/physiotherapists",
	path: "/join/physiotherapists",
	getParentRoute: () => Route$22
});
var ResourcesIndexRoute = Route.update({
	id: "/resources/",
	path: "/resources/",
	getParentRoute: () => Route$22
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute,
	CareOnRequestRoute,
	CareTeamRoute,
	CheckoutRoute,
	EmployersRoute,
	FaqRoute,
	GetStartedRoute,
	HowItWorksRoute,
	PartnersRoute,
	PlansRoute,
	PrivacyRoute,
	ReferRoute,
	ServiceAgreementRoute,
	ShareRoute,
	StoreRoute,
	TalkToYourParentRoute,
	TermsRoute,
	JoinCaregiversRoute,
	JoinDoctorsRoute,
	JoinLabPartnersRoute,
	JoinNursesRoute,
	JoinPharmacyPartnersRoute,
	JoinPhysiotherapistsRoute,
	ResourcesSlugRoute: Route$26.update({
		id: "/resources/$slug",
		path: "/resources/$slug",
		getParentRoute: () => Route$22
	}),
	ResourcesIndexRoute
};
var routeTree = Route$22._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
