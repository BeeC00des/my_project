import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as FileText, D as LogOut, W as Download, at as ArrowDown, g as Save, j as LayoutDashboard, k as LoaderCircle, m as Search, nt as ArrowUp, t as X, u as Trash2, v as Plus } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { c as cn, r as Logo, t as Button } from "./primitives-DZ3UawNy.mjs";
import { n as CARE_REQUEST_STATUSES, r as CARE_URGENCIES } from "./care-validation-B98TurVQ.mjs";
import { t as supabase } from "./client-DFJbzuNn.mjs";
import { t as Route } from "./admin-B04Cejq-.mjs";
import { a as useQueryClient, r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BEzFTc2a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Sheet = Dialog;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
function CareServicesAdmin() {
	const qc = useQueryClient();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const query = useQuery({
		queryKey: ["admin", "services"],
		queryFn: async () => {
			const { data, error } = await supabase.from("services").select("*").order("display_order");
			if (error) throw error;
			return data;
		}
	});
	async function save(s, patch) {
		const { error } = await supabase.from("services").update(patch).eq("id", s.id);
		if (error) {
			toast.error("Couldn't update service");
			return;
		}
		toast.success("Service updated");
		await qc.invalidateQueries({ queryKey: ["admin", "services"] });
		await qc.invalidateQueries({ queryKey: ["care-services"] });
	}
	async function move(s, direction) {
		const rows = query.data ?? [];
		const other = rows[rows.findIndex((r) => r.id === s.id) + direction];
		if (!other) return;
		setBusy(true);
		const updates = await Promise.all([supabase.from("services").update({ display_order: other.display_order }).eq("id", s.id), supabase.from("services").update({ display_order: s.display_order }).eq("id", other.id)]);
		setBusy(false);
		if (updates.some((r) => r.error)) toast.error("Couldn't reorder services");
		await qc.invalidateQueries({ queryKey: ["admin", "services"] });
		await qc.invalidateQueries({ queryKey: ["care-services"] });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl text-primary",
			children: "Services"
		}),
		query.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mt-8 animate-spin" }),
		query.error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-destructive",
			children: "Couldn't load services."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 max-w-4xl space-y-4",
			children: query.data?.map((s, i, rows) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ServiceEditor, {
				service: s,
				save,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					disabled: busy || i === 0,
					"aria-label": `Move ${s.name} up`,
					title: "Move up",
					onClick: () => move(s, -1),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					disabled: busy || i === rows.length - 1,
					"aria-label": `Move ${s.name} down`,
					title: "Move down",
					onClick: () => move(s, 1),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {})
				})]
			}, `${s.id}-${s.description}-${s.status}-${s.display_order}`))
		})
	] });
}
function ServiceEditor({ service: s, save, children }) {
	const [description, setDescription] = (0, import_react.useState)(s.description);
	const [status, setStatus] = (0, import_react.useState)(s.status);
	const [busy, setBusy] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "rounded-lg border bg-card p-5",
		onSubmit: async (e) => {
			e.preventDefault();
			setBusy(true);
			await save(s, {
				description,
				status
			});
			setBusy(false);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: s.category
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl text-primary",
					children: s.name
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex",
					children
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: `status-${s.id}`,
				className: "mt-4 block text-sm font-medium",
				children: "Availability"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				id: `status-${s.id}`,
				className: "mt-1 h-11 rounded-lg border bg-background px-3",
				value: status,
				onChange: (e) => setStatus(e.target.value),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "available",
					children: "Available"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "coming_soon",
					children: "Coming soon"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: `description-${s.id}`,
				className: "mt-4 block text-sm font-medium",
				children: "Description"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				id: `description-${s.id}`,
				required: true,
				maxLength: 2e3,
				rows: 3,
				className: "mt-1 w-full rounded-lg border bg-background p-3",
				value: description,
				onChange: (e) => setDescription(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				className: "mt-3",
				disabled: busy,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, {}), " Save"]
			})
		]
	});
}
var APPLICANT = [
	"Applied",
	"Documents checked",
	"Verified",
	"Interviewed",
	"Active pool",
	"Not progressing"
];
var INQUIRY = [
	"New",
	"Contacted",
	"In discussion",
	"Partner",
	"Closed"
];
var SECTIONS = [
	{
		key: "care-requests",
		label: "Care requests",
		table: "care_requests",
		statuses: [...CARE_REQUEST_STATUSES],
		cols: [
			["full_name", "Name"],
			["service_id", "Service"],
			["phone", "WhatsApp"],
			["parent_location", "Parent location"],
			["urgency", "Urgency"]
		]
	},
	{
		key: "physiotherapists",
		label: "Physiotherapists",
		table: "physiotherapist_applicants",
		statuses: APPLICANT,
		cols: [
			["full_name", "Name"],
			["registration_number", "Registration"],
			["location", "Location"],
			["phone", "Phone"]
		]
	},
	{
		key: "lab-partners",
		label: "Lab partners",
		table: "lab_partner_applicants",
		statuses: APPLICANT,
		cols: [
			["full_name", "Lab"],
			["location", "Coverage"],
			["email", "Email"],
			["phone", "Phone"]
		]
	},
	{
		key: "pharmacy-partners",
		label: "Pharmacy partners",
		table: "pharmacy_partner_applicants",
		statuses: APPLICANT,
		cols: [
			["full_name", "Pharmacy"],
			["registration_number", "Registration"],
			["location", "Location"],
			["phone", "Phone"]
		]
	},
	{
		key: "families",
		label: "Families",
		table: "family_leads",
		statuses: [
			"New inquiry",
			"Call booked",
			"Onboarding",
			"Active",
			"Paused",
			"Closed"
		],
		cols: [
			["full_name", "Name"],
			["country", "Country"],
			["parent_area", "Parent area"],
			["plan", "Plan"],
			["source", "Source"]
		]
	},
	{
		key: "waitlist",
		label: "Waitlist",
		table: "waitlist",
		cols: [["email", "Email"], ["parent_city", "City"]]
	},
	{
		key: "nurses",
		label: "Nurses",
		table: "nurse_applicants",
		statuses: APPLICANT,
		cols: [
			["full_name", "Name"],
			["phone", "Phone"],
			["license_number", "NMCN"],
			["years_experience", "Experience"]
		]
	},
	{
		key: "doctors",
		label: "Doctors",
		table: "doctor_applicants",
		statuses: APPLICANT,
		cols: [
			["full_name", "Name"],
			["phone", "Phone"],
			["license_number", "MDCN"],
			["years_experience", "Years"]
		]
	},
	{
		key: "caregivers",
		label: "Caregivers",
		table: "caregiver_applicants",
		statuses: APPLICANT,
		cols: [
			["full_name", "Name"],
			["phone", "Phone"],
			["source", "Source"]
		]
	},
	{
		key: "partners",
		label: "Partners",
		table: "partner_inquiries",
		statuses: INQUIRY,
		cols: [
			["organisation", "Organisation"],
			["org_type", "Type"],
			["full_name", "Contact"],
			["email", "Email"]
		]
	},
	{
		key: "employers",
		label: "Employers",
		table: "employer_inquiries",
		statuses: INQUIRY,
		cols: [
			["company", "Company"],
			["company_size", "Size"],
			["full_name", "Contact"],
			["email", "Email"]
		]
	},
	{
		key: "referrals",
		label: "Referrals",
		table: "referrals",
		statuses: [
			"New",
			"Contacted",
			"Signed up",
			"Rewarded",
			"Closed"
		],
		cols: [
			["full_name", "Referrer"],
			["friend_name", "Friend"],
			["friend_contact", "Friend contact"]
		]
	}
];
var fmt = (v) => v === null || v === void 0 ? "" : Array.isArray(v) ? v.join(", ") : typeof v === "object" ? JSON.stringify(v) : String(v);
function useSession() {
	const [session, setSession] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
		supabase.auth.getSession().then(({ data }) => {
			setSession(data.session);
			setReady(true);
		});
		return () => data.subscription.unsubscribe();
	}, []);
	return {
		session,
		ready
	};
}
function AdminPage() {
	const { session, ready } = useSession();
	const isAdmin = useQuery({
		queryKey: ["is-admin", session?.user.id],
		enabled: !!session,
		queryFn: async () => {
			if (!session) return false;
			const { data } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id).eq("role", "admin").maybeSingle();
			return !!data;
		}
	});
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Center, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) });
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Login, {});
	if (isAdmin.isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Center, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) });
	if (!isAdmin.data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Center, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-sm text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl text-primary",
				children: "No admin access"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted-foreground",
				children: [session.user.email, " is signed in but isn't an admin."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-6",
				onClick: () => supabase.auth.signOut(),
				children: "Sign out"
			})
		]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, { email: session.user.email ?? "" });
}
function Center({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center bg-cream p-4",
		children
	});
}
function Login() {
	const [mode, setMode] = (0, import_react.useState)("in");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [msg, setMsg] = (0, import_react.useState)("");
	async function submit(e) {
		e.preventDefault();
		setBusy(true);
		setMsg("");
		if (mode === "in") {
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password
			});
			if (error) setMsg(error.message);
		} else {
			const { error, data } = await supabase.auth.signUp({
				email,
				password,
				options: { emailRedirectTo: `${window.location.origin}/admin` }
			});
			if (error) setMsg(error.message);
			else if (!data.session) setMsg("Check your email to confirm your account, then sign in.");
		}
		setBusy(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Center, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "w-full max-w-sm rounded-3xl bg-card p-8 shadow-lift",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 text-2xl text-primary",
				children: mode === "in" ? "Admin sign in" : "Create admin account"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "mt-6 block font-medium",
				htmlFor: "a-email",
				children: "Email"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "a-email",
				type: "email",
				required: true,
				value: email,
				onChange: (e) => setEmail(e.target.value),
				className: "mt-1 h-11 w-full rounded-xl border bg-background px-3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "mt-4 block font-medium",
				htmlFor: "a-pass",
				children: "Password"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "a-pass",
				type: "password",
				required: true,
				minLength: 8,
				value: password,
				onChange: (e) => setPassword(e.target.value),
				className: "mt-1 h-11 w-full rounded-xl border bg-background px-3"
			}),
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-terracotta",
				role: "alert",
				children: msg
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				className: "mt-6 w-full",
				size: "lg",
				disabled: busy,
				children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : mode === "in" ? "Sign in" : "Create account"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setMode(mode === "in" ? "up" : "in"),
				className: "mt-4 w-full text-sm text-muted-foreground hover:underline",
				children: mode === "in" ? "First time? Create the admin account" : "Already have an account? Sign in"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-2 block text-center text-sm text-primary hover:underline",
				children: "Back to website"
			})
		]
	}) });
}
function Dashboard({ email }) {
	const { s } = Route.useSearch();
	const section = SECTIONS.find((x) => x.key === s);
	const isTestimonials = s === "testimonials";
	const isServices = s === "services";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen bg-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "hidden w-60 shrink-0 flex-col bg-sidebar p-5 text-sidebar-foreground md:flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { light: true }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mt-8 flex flex-1 flex-col gap-1",
					"aria-label": "Admin",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admin",
							search: {},
							className: cn("flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-sidebar-accent", !section && !isTestimonials && !isServices && "bg-sidebar-accent"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "size-4" }), " Overview"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							search: { s: "services" },
							className: cn("rounded-xl px-3 py-2 hover:bg-sidebar-accent", isServices && "bg-sidebar-accent"),
							children: "Services"
						}),
						SECTIONS.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							search: { s: x.key },
							className: cn("rounded-xl px-3 py-2 hover:bg-sidebar-accent", section?.key === x.key && "bg-sidebar-accent"),
							children: x.label
						}, x.key)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							search: { s: "testimonials" },
							className: cn("rounded-xl px-3 py-2 hover:bg-sidebar-accent", isTestimonials && "bg-sidebar-accent"),
							children: "Testimonials"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-xs opacity-70",
					children: email
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => supabase.auth.signOut(),
					className: "mt-2 flex items-center gap-2 text-sm hover:underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), " Sign out"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 overflow-x-auto border-b bg-card p-3 md:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						search: {},
						className: "shrink-0 rounded-full border px-3 py-1 text-sm",
						children: "Overview"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						search: { s: "services" },
						className: cn("shrink-0 rounded-full border px-3 py-1 text-sm", isServices && "bg-primary text-primary-foreground"),
						children: "Services"
					}),
					SECTIONS.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						search: { s: x.key },
						className: cn("shrink-0 rounded-full border px-3 py-1 text-sm", section?.key === x.key && "bg-primary text-primary-foreground"),
						children: x.label
					}, x.key)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						search: { s: "testimonials" },
						className: cn("shrink-0 rounded-full border px-3 py-1 text-sm", isTestimonials && "bg-primary text-primary-foreground"),
						children: "Testimonials"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "p-4 md:p-8",
				children: isServices ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareServicesAdmin, {}) : isTestimonials ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsAdmin, {}) : section ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableView, { section }, section.key) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {})
			})]
		})]
	});
}
function TestimonialsAdmin() {
	const qc = useQueryClient();
	const [quote, setQuote] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [detail, setDetail] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const list = useQuery({
		queryKey: ["admin", "testimonials"],
		queryFn: async () => {
			const { data, error } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	async function add(e) {
		e.preventDefault();
		if (!quote.trim() || !name.trim()) {
			toast.error("Quote and name are required");
			return;
		}
		setBusy(true);
		const { error } = await supabase.from("testimonials").insert({
			quote: quote.trim(),
			name: name.trim(),
			detail: detail.trim() || null,
			published: false
		});
		setBusy(false);
		if (error) {
			toast.error("Couldn't add testimonial");
			return;
		}
		toast.success("Added. Publish it when you're ready for it to appear on the site.");
		setQuote("");
		setName("");
		setDetail("");
		qc.invalidateQueries({ queryKey: ["admin", "testimonials"] });
	}
	async function setPublished(t, published) {
		const { error } = await supabase.from("testimonials").update({ published }).eq("id", t.id);
		if (error) {
			toast.error("Couldn't update");
			return;
		}
		toast.success(published ? "Published on the website" : "Unpublished");
		qc.invalidateQueries({ queryKey: ["admin", "testimonials"] });
	}
	async function remove(t) {
		const { error } = await supabase.from("testimonials").delete().eq("id", t.id);
		if (error) {
			toast.error("Couldn't delete");
			return;
		}
		toast.success("Deleted");
		qc.invalidateQueries({ queryKey: ["admin", "testimonials"] });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl text-primary",
			children: "Testimonials"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-2xl text-muted-foreground",
			children: "Add real, approved family testimonials here. They only appear on the website once you publish them."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: add,
			className: "mt-6 max-w-2xl space-y-3 rounded-2xl bg-card p-6 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-sm font-medium",
					htmlFor: "t-quote",
					children: "Quote"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "t-quote",
					rows: 4,
					required: true,
					value: quote,
					onChange: (e) => setQuote(e.target.value),
					className: "w-full rounded-xl border bg-background p-3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm font-medium",
						htmlFor: "t-name",
						children: "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "t-name",
						required: true,
						value: name,
						onChange: (e) => setName(e.target.value),
						className: "mt-1 h-10 w-full rounded-xl border bg-background px-3"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm font-medium",
						htmlFor: "t-detail",
						children: "Detail (optional, e.g. city or role)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "t-detail",
						value: detail,
						onChange: (e) => setDetail(e.target.value),
						className: "mt-1 h-10 w-full rounded-xl border bg-background px-3"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					disabled: busy,
					children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), " Add testimonial"]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 max-w-2xl space-y-4",
			children: [
				list.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }),
				list.data?.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "No testimonials yet. Nothing shows on the website until you add and publish one."
				}),
				list.data?.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-card p-5 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-serif italic",
							children: [
								"\"",
								t.quote,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm font-semibold",
							children: [t.name, t.detail ? ` · ${t.detail}` : ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: t.published ? "outline" : "cta",
									onClick: () => setPublished(t, !t.published),
									children: t.published ? "Unpublish" : "Publish"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: () => remove(t),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), " Delete"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("rounded-full px-2.5 py-1 text-xs font-medium", t.published ? "bg-primary-soft text-primary" : "bg-gold-soft"),
									children: t.published ? "Live on site" : "Hidden"
								})
							]
						})
					]
				}, t.id))
			]
		})
	] });
}
function useRows(table) {
	return useQuery({
		queryKey: ["admin", table],
		queryFn: async () => {
			const { data, error } = await supabase.from(table).select("*").order("created_at", { ascending: false }).limit(1e3);
			if (error) throw error;
			return data;
		}
	});
}
function Overview() {
	const fam = useRows("family_leads");
	const n = useRows("nurse_applicants");
	const d = useRows("doctor_applicants");
	const c = useRows("caregiver_applicants");
	const w = useRows("waitlist");
	const weekAgo = Date.now() - 6048e5;
	const applicants = [
		...n.data ?? [],
		...d.data ?? [],
		...c.data ?? []
	];
	const byStage = APPLICANT.map((st) => [st, applicants.filter((a) => a.status === st).length]);
	const sources = (0, import_react.useMemo)(() => {
		const m = /* @__PURE__ */ new Map();
		(fam.data ?? []).forEach((r) => {
			const k = fmt(r["source"]) || "Unknown";
			m.set(k, (m.get(k) ?? 0) + 1);
		});
		return [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
	}, [fam.data]);
	const stat = (label, value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-card p-5 shadow-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-serif text-4xl text-primary",
			children: value
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl text-primary",
			children: "Overview"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				stat("New family inquiries this week", (fam.data ?? []).filter((r) => new Date(r.created_at).getTime() > weekAgo).length),
				stat("Active families", (fam.data ?? []).filter((r) => r.status === "Active").length),
				stat("Total applicants", applicants.length),
				stat("Waitlist", (w.data ?? []).length)
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card p-6 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "Applicants by stage"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: byStage.map(([st, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between border-b pb-2 last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: st }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: v
						})]
					}, st))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card p-6 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "Top \"how did you hear about us\""
				}), sources.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "No family inquiries yet."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: sources.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between border-b pb-2 last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: k }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: v
						})]
					}, k))
				})]
			})]
		})
	] });
}
function toCsv(rows) {
	if (!rows.length) return "";
	const first = rows[0];
	if (!first) return "";
	const keys = Object.keys(first);
	const esc = (v) => `"${v.replace(/"/g, "\"\"")}"`;
	return [keys.join(","), ...rows.map((r) => keys.map((k) => esc(fmt(r[k]))).join(","))].join("\n");
}
function TableView({ section }) {
	const { data, isLoading, error } = useRows(section.table);
	const [q, setQ] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(null);
	const [service, setService] = (0, import_react.useState)("");
	const [urgency, setUrgency] = (0, import_react.useState)("");
	const careServices = useQuery({
		queryKey: ["admin", "services"],
		enabled: section.table === "care_requests",
		queryFn: async () => {
			const { data, error } = await supabase.from("services").select("*").order("display_order");
			if (error) throw error;
			return data;
		}
	});
	const rows = (0, import_react.useMemo)(() => (data ?? []).filter((r) => (!status || r.status === status) && (!service || r["service_id"] === service) && (!urgency || r["urgency"] === urgency) && (!q || JSON.stringify(r).toLowerCase().includes(q.toLowerCase()))), [
		data,
		q,
		status,
		service,
		urgency
	]);
	function exportCsv() {
		const blob = new Blob([toCsv(rows)], { type: "text/csv" });
		const a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = `${section.key}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
		a.click();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl text-primary",
				children: section.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				onClick: exportCsv,
				disabled: !rows.length,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), " Export CSV"]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-wrap gap-3",
			children: [
				section.table === "care_requests" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					"aria-label": "Filter by service",
					value: service,
					onChange: (e) => setService(e.target.value),
					className: "h-10 max-w-full rounded-xl border bg-card px-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "All services"
					}), careServices.data?.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: s.id,
						children: s.name
					}, s.id))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					"aria-label": "Filter by urgency",
					value: urgency,
					onChange: (e) => setUrgency(e.target.value),
					className: "h-10 rounded-xl border bg-card px-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "All urgency levels"
					}), CARE_URGENCIES.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: u }, u))]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-w-60 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "absolute left-3 top-3 size-4 text-muted-foreground",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						"aria-label": "Search",
						placeholder: "Search...",
						value: q,
						onChange: (e) => setQ(e.target.value),
						className: "h-10 w-full rounded-xl border bg-card pl-9 pr-3"
					})]
				}),
				section.statuses && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					"aria-label": "Filter by status",
					value: status,
					onChange: (e) => setStatus(e.target.value),
					className: "h-10 rounded-xl border bg-card px-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "All statuses"
					}), section.statuses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 overflow-x-auto rounded-2xl bg-card shadow-soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[640px] text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "p-3",
							children: "Date"
						}),
						section.cols.map(([, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "p-3",
							children: l
						}, l)),
						section.statuses && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "p-3",
							children: "Status"
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
					isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "p-6",
						colSpan: 9,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" })
					}) }),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "p-6 text-destructive",
						colSpan: 9,
						children: "Couldn't load records."
					}) }),
					!isLoading && rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "p-6 text-muted-foreground",
						colSpan: 9,
						children: "No records yet."
					}) }),
					rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						onClick: () => setOpen(r),
						className: "cursor-pointer border-b last:border-0 hover:bg-primary-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "whitespace-nowrap p-3",
								children: new Date(r.created_at).toLocaleDateString()
							}),
							section.cols.map(([k]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "max-w-56 truncate p-3",
								children: k === "service_id" ? careServices.data?.find((s) => s.id === r[k])?.name ?? fmt(r[k]) : fmt(r[k])
							}, k)),
							section.statuses && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "p-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-gold-soft px-2.5 py-1 text-xs font-medium",
									children: r.status
								})
							})
						]
					}, r.id))
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
			open: !!open,
			onOpenChange: (o) => !o && setOpen(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
				className: "w-full overflow-y-auto sm:max-w-lg",
				children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
					row: open,
					section,
					onSaved: (r) => setOpen(r)
				})
			})
		})
	] });
}
function Detail({ row, section, onSaved }) {
	const qc = useQueryClient();
	const [status, setStatus] = (0, import_react.useState)(row["status"] ?? "");
	const [notes, setNotes] = (0, import_react.useState)(row.notes ?? "");
	const [saving, setSaving] = (0, import_react.useState)(false);
	const details = row["details"] ?? {};
	const files = row["files"] ?? [];
	const skip = /* @__PURE__ */ new Set([
		"id",
		"details",
		"files",
		"notes",
		"status"
	]);
	async function save() {
		setSaving(true);
		const patch = { notes: notes || null };
		if (section.statuses) patch["status"] = status;
		const { data, error } = await supabase.from(section.table).update(patch).eq("id", row.id).select().single();
		setSaving(false);
		if (error) {
			toast.error("Couldn't save changes");
			return;
		}
		toast.success("Saved");
		qc.invalidateQueries({ queryKey: ["admin", section.table] });
		onSaved(data);
	}
	async function openFile(path) {
		const { data, error } = await supabase.storage.from("applicant-files").createSignedUrl(path, 300);
		if (error || !data) {
			toast.error("Couldn't open file");
			return;
		}
		window.open(data.signedUrl, "_blank", "noopener");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
		className: "font-serif text-2xl text-primary",
		children: fmt(row["full_name"] ?? row["organisation"] ?? row["company"] ?? row["email"])
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 px-4 pb-8",
		children: [
			section.statuses && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "d-status",
				className: "text-sm font-medium",
				children: "Status"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				id: "d-status",
				value: status,
				onChange: (e) => setStatus(e.target.value),
				className: "mt-1 h-10 w-full rounded-xl border bg-background px-3",
				children: section.statuses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "d-notes",
				className: "text-sm font-medium",
				children: "Internal notes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				id: "d-notes",
				rows: 4,
				value: notes,
				onChange: (e) => setNotes(e.target.value),
				className: "mt-1 w-full rounded-xl border bg-background p-3"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: save,
				disabled: saving,
				children: saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : "Save changes"
			}),
			files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold",
				children: "Uploaded files"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2",
				children: files.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => openFile(f.path),
					className: "flex items-center gap-2 text-primary hover:underline",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" }),
						" ",
						f.label,
						": ",
						f.name
					]
				}) }, f.path))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "space-y-3 text-sm",
				children: [Object.entries(row).filter(([k, v]) => !skip.has(k) && v !== null && v !== "").map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-muted-foreground",
					children: k.replace(/_/g, " ")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: k === "created_at" ? new Date(String(v)).toLocaleString() : fmt(v) })] }, k)), Object.entries(details).filter(([, v]) => v !== void 0 && v !== null && v !== "").map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-muted-foreground",
					children: k.replace(/_/g, " ")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "whitespace-pre-wrap",
					children: fmt(v)
				})] }, k))]
			})
		]
	})] });
}
//#endregion
export { AdminPage as component };
