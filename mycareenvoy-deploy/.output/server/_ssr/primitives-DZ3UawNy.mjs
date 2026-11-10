import { r as __toESM } from "../_runtime.mjs";
import { v as whatsappLink } from "./site-DGtN9-jT.mjs";
import { _ as require_jsx_runtime, m as Slot, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { w as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/primitives-DZ3UawNy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90",
			cta: "bg-terracotta text-terracotta-foreground shadow-soft hover:bg-terracotta/90 hover:-translate-y-0.5 hover:shadow-lift",
			whatsapp: "bg-whatsapp text-foreground shadow-soft hover:bg-whatsapp/90 hover:-translate-y-0.5",
			light: "bg-background text-primary shadow-soft hover:bg-cream",
			outlineLight: "border border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-primary/30 bg-transparent text-primary hover:bg-primary-soft",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10 px-5 py-2",
			sm: "h-8 px-3 text-xs",
			lg: "h-12 px-7 text-base",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var mycareenvoy_emblem_jpg_asset_default = {
	version: 1,
	asset_id: "2a04ff7c-872d-4ab2-b847-e0c2511d64e9",
	project_id: "1d9c731d-19f3-49c0-8626-360ca834fbbf",
	url: "/__l5e/assets-v1/2a04ff7c-872d-4ab2-b847-e0c2511d64e9/mycareenvoy-emblem.jpg",
	r2_key: "a/v1/1d9c731d-19f3-49c0-8626-360ca834fbbf/2a04ff7c-872d-4ab2-b847-e0c2511d64e9/mycareenvoy-emblem.jpg",
	original_filename: "mycareenvoy-emblem.jpg",
	size: 16178,
	content_type: "image/jpeg",
	created_at: "2026-10-16T05:33:20Z"
};
function Logo({ light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-2",
		"aria-label": "MyCareEnvoy home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: mycareenvoy_emblem_jpg_asset_default.url,
			alt: "",
			className: "size-11 shrink-0 rounded-md object-contain"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("font-serif text-xl font-semibold whitespace-nowrap", light ? "text-primary-foreground" : "text-primary"),
			children: "MyCareEnvoy"
		})]
	});
}
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e?.isIntersecting) {
				setVisible(true);
				io.disconnect();
			}
		}, { threshold: .12 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", visible && "is-visible", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function SectionHeading({ eyebrow, title, intro, center = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-2xl", center && "mx-auto text-center"),
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-3",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl text-primary md:text-[2.6rem]",
				children: title
			}),
			intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-muted-foreground",
				children: intro
			})
		]
	});
}
function WhatsAppButton({ label = "Chat on WhatsApp", size = "lg", message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		variant: "whatsapp",
		size,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: whatsappLink(message),
			target: "_blank",
			rel: "noopener noreferrer",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": true }),
				" ",
				label
			]
		})
	});
}
function PageHero({ eyebrow, title, intro, image, imageAlt, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "adire-bg pointer-events-none absolute inset-0 opacity-[0.05]",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("container-page relative grid items-center gap-10 py-14 md:py-20", image && "md:grid-cols-2"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-3",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl text-primary md:text-5xl",
					children: title
				}),
				intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-lg text-muted-foreground",
					children: intro
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-7 flex flex-wrap gap-3",
					children
				})
			] }), image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: imageAlt ?? "",
				width: 1200,
				height: 900,
				className: "aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
			})]
		})]
	});
}
function CtaBand({ title = "Your parents took care of you. Let us help you take care of them.", image }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "Older Nigerian couple laughing together on a veranda",
				loading: "lazy",
				className: "absolute inset-0 -z-10 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 -z-10 bg-primary/80",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-20 text-center md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mx-auto max-w-3xl text-3xl text-primary-foreground md:text-5xl",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "cta",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/get-started",
							children: "Get started"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})]
				})]
			})
		]
	});
}
//#endregion
export { Reveal as a, cn as c, PageHero as i, CtaBand as n, SectionHeading as o, Logo as r, WhatsAppButton as s, Button as t };
