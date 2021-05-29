const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Home.vue"),
        name: "Home",
        meta: {
          authRequired: true
        }
      },
      {
        path: "/explore",
        component: () => import("pages/Explore.vue"),
        name: "Explore",
        meta: {
          authRequired: true
        }
      },
      {
        path: "/notifications",
        component: () => import("pages/Notifications.vue"),
        name: "Notifications",
        meta: {
          authRequired: true
        }
      },
      {
        path: "/about",
        component: () => import("pages/About.vue"),
        name: "About",
        meta: {
          authRequired: true
        }
      },
      {
        path: "/contact",
        component: () => import("pages/Contact.vue"),
        name: "Contact",
        meta: {
          authRequired: true
        }
      },
      {
        path: "/profile",
        component: () => import("pages/Profile.vue"),
        name: "Profile",
        meta: {
          authRequired: true
        }
      },
      {
        path: "/support",
        component: () => import("pages/Support.vue"),
        name: "Support",
        meta: {
          authRequired: true
        }
      }
    ]
  },
  {
    path: "/login",
    component: () => import("pages/Login.vue"),
    name: "Login"
  },
  {
    path: "/register",
    component: () => import("pages/Register.vue"),
    name: "Register"
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
