globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { i as toEventHandler, n as defineHandler, o as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"1738-NL2ULTG4gNH+TnMhSvccPCtUH1U\"",
		"mtime": "2026-11-04T10:57:36.336Z",
		"size": 5944,
		"path": "../public/favicon.png"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"e1-fSPgwyE3X+yWMMnKfQuTxmfL3h4\"",
		"mtime": "2026-11-04T10:57:36.337Z",
		"size": 225,
		"path": "../public/favicon.svg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"e2-hpVQ0clcBQr6L6umoWmjATzYOrw\"",
		"mtime": "2026-11-04T10:57:36.336Z",
		"size": 226,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"8e8-fzEXdlBqbZRPVnIjrPGrEuK7my0\"",
		"mtime": "2026-11-04T10:57:36.336Z",
		"size": 2280,
		"path": "../public/sitemap.xml"
	},
	"/assets/BaselineAssessment-Co2K8i4r.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dd0-g+ymwhFdmkrVQdHoN2NVrvp9xio\"",
		"mtime": "2026-11-04T10:57:35.474Z",
		"size": 7632,
		"path": "../public/assets/BaselineAssessment-Co2K8i4r.js"
	},
	"/assets/JoinPage-CymlhjLG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"948-y293tWFJTyUHA3NHfULXkjnfGds\"",
		"mtime": "2026-11-04T10:57:35.474Z",
		"size": 2376,
		"path": "../public/assets/JoinPage-CymlhjLG.js"
	},
	"/assets/LegalPage-CGRjKR_9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f5-5jYDUWHMzJZRJqH2GrtsYeRiV9U\"",
		"mtime": "2026-11-04T10:57:35.474Z",
		"size": 501,
		"path": "../public/assets/LegalPage-CGRjKR_9.js"
	},
	"/assets/about-B3A2OzHl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f99-JlJgICnM10U6kaC0FrlBvJkIR6s\"",
		"mtime": "2026-11-04T10:57:35.474Z",
		"size": 3993,
		"path": "../public/assets/about-B3A2OzHl.js"
	},
	"/assets/admin-hqMF8xIa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6d49-RTZN9J0WrMTSfevMMU2dBbzLmO0\"",
		"mtime": "2026-11-04T10:57:35.475Z",
		"size": 27977,
		"path": "../public/assets/admin-hqMF8xIa.js"
	},
	"/assets/arrival-Ct88BMSH.jpg": {
		"type": "image/jpeg",
		"etag": "\"3558f-FrXgaAcW5Yr8fN2pwTzmQWb5eCk\"",
		"mtime": "2026-11-04T10:57:35.484Z",
		"size": 218511,
		"path": "../public/assets/arrival-Ct88BMSH.jpg"
	},
	"/assets/arrow-left-BGRyW3Ug.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f-fOMFMJKlVcIdyBAvyX2u5GxxlTc\"",
		"mtime": "2026-11-04T10:57:35.475Z",
		"size": 159,
		"path": "../public/assets/arrow-left-BGRyW3Ug.js"
	},
	"/assets/arrow-right-DHjvXH7u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f-eWt/7wfuWzNl2uGZA16ssV9A9h4\"",
		"mtime": "2026-11-04T10:57:35.475Z",
		"size": 159,
		"path": "../public/assets/arrow-right-DHjvXH7u.js"
	},
	"/assets/care-on-request-BAP7HROH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"154-10p/U8a2c6WJv/lObJVHLnHOqyk\"",
		"mtime": "2026-11-04T10:57:35.475Z",
		"size": 340,
		"path": "../public/assets/care-on-request-BAP7HROH.js"
	},
	"/assets/care-on-request-RQAQhvam.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"233c-gvEoC/QCwh7wEtI7k+i3vsY8nT8\"",
		"mtime": "2026-11-04T10:57:35.475Z",
		"size": 9020,
		"path": "../public/assets/care-on-request-RQAQhvam.js"
	},
	"/assets/care-team-CSEtroYF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1025-tZFF4khx4QpTFlSie6TcEHCb5wU\"",
		"mtime": "2026-11-04T10:57:35.475Z",
		"size": 4133,
		"path": "../public/assets/care-team-CSEtroYF.js"
	},
	"/assets/check-Cer0M3Aa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-sKmwZ3TvESAQE7s5qV+vpT1CdOM\"",
		"mtime": "2026-11-04T10:57:35.475Z",
		"size": 118,
		"path": "../public/assets/check-Cer0M3Aa.js"
	},
	"/assets/checkout-BiCxmycM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dda-r+Bs/HunK+Wtp/1ODOankYpjgBE\"",
		"mtime": "2026-11-04T10:57:35.475Z",
		"size": 7642,
		"path": "../public/assets/checkout-BiCxmycM.js"
	},
	"/assets/clock-IFpgwC-C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3-+/Rli9yzpOKgVnD1ZlDl5DlONkU\"",
		"mtime": "2026-11-04T10:57:35.476Z",
		"size": 163,
		"path": "../public/assets/clock-IFpgwC-C.js"
	},
	"/assets/caregiver-CkB_a2w-.jpg": {
		"type": "image/jpeg",
		"etag": "\"34d32-Tn1J+PNQMylJ8UTdW8hdBZ/BPZc\"",
		"mtime": "2026-11-04T10:57:35.485Z",
		"size": 216370,
		"path": "../public/assets/caregiver-CkB_a2w-.jpg"
	},
	"/assets/employers-3MN7r4D2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"be1-1V8otpAzBGAgCB0F9omu5W91Iu0\"",
		"mtime": "2026-11-04T10:57:35.476Z",
		"size": 3041,
		"path": "../public/assets/employers-3MN7r4D2.js"
	},
	"/assets/faq-Bsj-VKmD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e2-VxNFefHbIqm5pO75gJaM7SH6wyY\"",
		"mtime": "2026-11-04T10:57:35.476Z",
		"size": 738,
		"path": "../public/assets/faq-Bsj-VKmD.js"
	},
	"/assets/couple-70zELqTg.jpg": {
		"type": "image/jpeg",
		"etag": "\"3ae6d-8MgRutycQYWJeGnKBwgrt2fIIIk\"",
		"mtime": "2026-11-04T10:57:35.486Z",
		"size": 241261,
		"path": "../public/assets/couple-70zELqTg.jpg"
	},
	"/assets/faq-YeKaI4l7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"70d2-Rh0VIq9zomuPTrDWE0PRMpKq0iI\"",
		"mtime": "2026-11-04T10:57:35.476Z",
		"size": 28882,
		"path": "../public/assets/faq-YeKaI4l7.js"
	},
	"/assets/founder.jpg.asset-0FZZ0Ycn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"197-YuYKKDE88s3d29xtfeVmZ7otV+g\"",
		"mtime": "2026-11-04T10:57:35.476Z",
		"size": 407,
		"path": "../public/assets/founder.jpg.asset-0FZZ0Ycn.js"
	},
	"/assets/doctor-osdxuBdL.jpg": {
		"type": "image/jpeg",
		"etag": "\"29018-XgVU+aa1F0CaLhUNP+/6GhkJgVM\"",
		"mtime": "2026-11-04T10:57:35.486Z",
		"size": 167960,
		"path": "../public/assets/doctor-osdxuBdL.jpg"
	},
	"/assets/get-started-DMnsWl69.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21b0-j4y2e2nLN1k80noeuj8OeHSmZSU\"",
		"mtime": "2026-11-04T10:57:35.476Z",
		"size": 8624,
		"path": "../public/assets/get-started-DMnsWl69.js"
	},
	"/assets/garden-BHQYZm7y.jpg": {
		"type": "image/jpeg",
		"etag": "\"38806-mi63B7xxg7Ym3FnJQkHDUALUJFA\"",
		"mtime": "2026-11-04T10:57:35.487Z",
		"size": 231430,
		"path": "../public/assets/garden-BHQYZm7y.jpg"
	},
	"/assets/hospital-DJIGHsVA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"178-R45JtB6hvlfBpa9RZGsCF+JcPcs\"",
		"mtime": "2026-11-04T10:57:35.476Z",
		"size": 376,
		"path": "../public/assets/hospital-DJIGHsVA.js"
	},
	"/assets/how-it-works-CEudDV9a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14f3-8024LCJ24Qqu0I+zc53lSqmLBYw\"",
		"mtime": "2026-11-04T10:57:35.477Z",
		"size": 5363,
		"path": "../public/assets/how-it-works-CEudDV9a.js"
	},
	"/assets/images-BFKiM5na.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"423-n7ABjTqWOBnAn6IlR2yy+fqdUmM\"",
		"mtime": "2026-11-04T10:57:35.477Z",
		"size": 1059,
		"path": "../public/assets/images-BFKiM5na.js"
	},
	"/assets/hero-B04YJQAq.jpg": {
		"type": "image/jpeg",
		"etag": "\"45a15-DGcaxZrcvFbD1/mE9cQEtwvaCEw\"",
		"mtime": "2026-11-04T10:57:35.488Z",
		"size": 285205,
		"path": "../public/assets/hero-B04YJQAq.jpg"
	},
	"/assets/invariant-CgFvOqN2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c2-OtvVxjJzKVqOT1XQL6Tnz3B8fGk\"",
		"mtime": "2026-11-04T10:57:35.477Z",
		"size": 450,
		"path": "../public/assets/invariant-CgFvOqN2.js"
	},
	"/assets/join.caregivers-BhdaoVar.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"916-qoGPLxXY3xeMura9f5Eg71bRGQQ\"",
		"mtime": "2026-11-04T10:57:35.478Z",
		"size": 2326,
		"path": "../public/assets/join.caregivers-BhdaoVar.js"
	},
	"/assets/join.doctors-B1LM8BTs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"967-M2T5S+CQg29gwMmE0x7N1U+ddMo\"",
		"mtime": "2026-11-04T10:57:35.478Z",
		"size": 2407,
		"path": "../public/assets/join.doctors-B1LM8BTs.js"
	},
	"/assets/join.nurses-BZs9C7AY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c4e-eJEtniENRikhWR4VCoQ74InMPhw\"",
		"mtime": "2026-11-04T10:57:35.478Z",
		"size": 3150,
		"path": "../public/assets/join.nurses-BZs9C7AY.js"
	},
	"/assets/join.physiotherapists-D6VFOAB1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"894-k17ccnRxpXTRemM2Z6n8U0z2ZLQ\"",
		"mtime": "2026-11-04T10:57:35.478Z",
		"size": 2196,
		"path": "../public/assets/join.physiotherapists-D6VFOAB1.js"
	},
	"/assets/jsx-runtime-BkSabwWG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c1-VkW1xFbt56H2FC99QIi6PTzaFIo\"",
		"mtime": "2026-11-04T10:57:35.478Z",
		"size": 961,
		"path": "../public/assets/jsx-runtime-BkSabwWG.js"
	},
	"/assets/minus-qHWbdjke.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f-dUXiCwP5pj1PZW3rROVqDoMN80E\"",
		"mtime": "2026-11-04T10:57:35.478Z",
		"size": 111,
		"path": "../public/assets/minus-qHWbdjke.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-11-04T10:57:35.478Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/partners-Cs2sJbRL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cee-mNN5XYj954lxWwXWddmkd5s4VK8\"",
		"mtime": "2026-11-04T10:57:35.478Z",
		"size": 3310,
		"path": "../public/assets/partners-Cs2sJbRL.js"
	},
	"/assets/pill-54JeTbAs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"184-opk7QoFUc4sB+UPeRP2sohK4ArQ\"",
		"mtime": "2026-11-04T10:57:35.479Z",
		"size": 388,
		"path": "../public/assets/pill-54JeTbAs.js"
	},
	"/assets/plans-CmjcDYTU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2acd-SFhTVz5uSzM6gc51QsxxyPiH0F8\"",
		"mtime": "2026-11-04T10:57:35.479Z",
		"size": 10957,
		"path": "../public/assets/plans-CmjcDYTU.js"
	},
	"/assets/plus-djQsmHBM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"93-EBIOLAw01WnUrX+aGPERrTqAjj0\"",
		"mtime": "2026-11-04T10:57:35.479Z",
		"size": 147,
		"path": "../public/assets/plus-djQsmHBM.js"
	},
	"/assets/primitives-Z6xRl62R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df1b-SM/BjHbHdHoc1LWfnxdM+QZUU8I\"",
		"mtime": "2026-11-04T10:57:35.479Z",
		"size": 57115,
		"path": "../public/assets/primitives-Z6xRl62R.js"
	},
	"/assets/privacy-JDCZ1Maj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c84-NVLuyXltpoSuSlheUbaeD623OkY\"",
		"mtime": "2026-11-04T10:57:35.479Z",
		"size": 3204,
		"path": "../public/assets/privacy-JDCZ1Maj.js"
	},
	"/assets/problem-C8fnVp71.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d37e-WgtB+nsCh88CgyrBE54Aq6Eu9FM\"",
		"mtime": "2026-11-04T10:57:35.489Z",
		"size": 119678,
		"path": "../public/assets/problem-C8fnVp71.jpg"
	},
	"/assets/refer-Cnfa2H0x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c8-vqOh2DqM6KyjWMKTxT9sOJe1jSo\"",
		"mtime": "2026-11-04T10:57:35.479Z",
		"size": 2248,
		"path": "../public/assets/refer-Cnfa2H0x.js"
	},
	"/assets/resources._slug-D1D4fbi_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f5-O9VLb9e6p2BC9BMs1Xh0honYQ14\"",
		"mtime": "2026-11-04T10:57:35.479Z",
		"size": 2037,
		"path": "../public/assets/resources._slug-D1D4fbi_.js"
	},
	"/assets/meal-ByYst_CI.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ea2f-8EzhZ+Hpm9LrT6EYbA1jCZ/dgRw\"",
		"mtime": "2026-11-04T10:57:35.488Z",
		"size": 191023,
		"path": "../public/assets/meal-ByYst_CI.jpg"
	},
	"/assets/index-CiCrYOYm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b9178-OraE0tlsthfsQgmxehRuqw0Swdg\"",
		"mtime": "2026-11-04T10:57:35.474Z",
		"size": 758136,
		"path": "../public/assets/index-CiCrYOYm.js"
	},
	"/assets/resources.index-B6u8Mu4Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"811-0Mr9yXNMROT/RoxPT5qZM9c5RBY\"",
		"mtime": "2026-11-04T10:57:35.479Z",
		"size": 2065,
		"path": "../public/assets/resources.index-B6u8Mu4Q.js"
	},
	"/assets/service-agreement-DDp8Z2Ay.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a43-zth9q1jPnbGnWz3W5K7BxEAgznU\"",
		"mtime": "2026-11-04T10:57:35.480Z",
		"size": 2627,
		"path": "../public/assets/service-agreement-DDp8Z2Ay.js"
	},
	"/assets/share-Dpg0fgaL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c96-ghtVFZUsXPWgc/pRdKwWejwIu3c\"",
		"mtime": "2026-11-04T10:57:35.480Z",
		"size": 3222,
		"path": "../public/assets/share-Dpg0fgaL.js"
	},
	"/assets/routes-BNt54kVM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37af-R3+6wKL65BMx6FISk0rx/CYVjD0\"",
		"mtime": "2026-11-04T10:57:35.479Z",
		"size": 14255,
		"path": "../public/assets/routes-BNt54kVM.js"
	},
	"/assets/shield-check-DbTySV9U.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13a-6cvyF9WTUd9d0q7oIgQu28VXuoQ\"",
		"mtime": "2026-11-04T10:57:35.480Z",
		"size": 314,
		"path": "../public/assets/shield-check-DbTySV9U.js"
	},
	"/assets/store-1oWhL45b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"440-gfnuxhnE2mK7I0/01BaEEgGhOo4\"",
		"mtime": "2026-11-04T10:57:35.481Z",
		"size": 1088,
		"path": "../public/assets/store-1oWhL45b.js"
	},
	"/assets/talk-to-your-parent-XUXQXbyR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dbd-NvEF5Szpy1NuEc1NTFQN+H4dxQ0\"",
		"mtime": "2026-11-04T10:57:35.481Z",
		"size": 3517,
		"path": "../public/assets/talk-to-your-parent-XUXQXbyR.js"
	},
	"/assets/site-CnQF2fXg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d28-eusJl3aU85Jng98PG/jgprEmH5U\"",
		"mtime": "2026-11-04T10:57:35.481Z",
		"size": 11560,
		"path": "../public/assets/site-CnQF2fXg.js"
	},
	"/assets/terms-4Nx2b3T6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"855-0rfO23z4x6sPCqW5WzYmWg6GOxs\"",
		"mtime": "2026-11-04T10:57:35.482Z",
		"size": 2133,
		"path": "../public/assets/terms-4Nx2b3T6.js"
	},
	"/assets/test-tube-diagonal-7vylfzRY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"101-E8qXaWPZsQyvLWveQsPDnLD2k0k\"",
		"mtime": "2026-11-04T10:57:35.482Z",
		"size": 257,
		"path": "../public/assets/test-tube-diagonal-7vylfzRY.js"
	},
	"/assets/styles-BEQlw0vZ.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"16f7c-TF/ABtqhwrAxA3iJmrrY/nCtZQc\"",
		"mtime": "2026-11-04T10:57:35.490Z",
		"size": 94076,
		"path": "../public/assets/styles-BEQlw0vZ.css"
	},
	"/assets/useBaseQuery-BxTEEsMM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f40-JtRQwkab+1voQC0xvsN5hj1ml9k\"",
		"mtime": "2026-11-04T10:57:35.482Z",
		"size": 8e3,
		"path": "../public/assets/useBaseQuery-BxTEEsMM.js"
	},
	"/assets/useQuery-BFe6Qmn3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"60-8QbL+TD1bKClp3RhhYZWTML21CE\"",
		"mtime": "2026-11-04T10:57:35.483Z",
		"size": 96,
		"path": "../public/assets/useQuery-BFe6Qmn3.js"
	},
	"/assets/team-0u8BI55F.jpg": {
		"type": "image/jpeg",
		"etag": "\"27d76-e192iOrFK1HzFCXNF5wJB7iDsI8\"",
		"mtime": "2026-11-04T10:57:35.490Z",
		"size": 163190,
		"path": "../public/assets/team-0u8BI55F.jpg"
	},
	"/assets/useServerFn-BNA---8c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19a-JnU2GEVwdY4zBtsZ3e421XerNnA\"",
		"mtime": "2026-11-04T10:57:35.483Z",
		"size": 410,
		"path": "../public/assets/useServerFn-BNA---8c.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_z4NJ89 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_z4NJ89
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
