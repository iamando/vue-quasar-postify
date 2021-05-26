const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Home.vue"), name: "Home" },
      {
        path: "/explore",
        component: () => import("pages/Explore.vue"),
        name: "Explore"
      },
      {
        path: "/notifications",
        component: () => import("pages/Notifications.vue"),
        name: "Notifications"
      },
      {
        path: "/about",
        component: () => import("pages/About.vue"),
        name: "About"
      },
      {
        path: "/contact",
        component: () => import("pages/Contact.vue"),
        name: "Contact"
      },
      {
        path: "/profile",
        component: () => import("pages/Profile.vue"),
        name: "Accounts"
      },
      {
        path: "/support",
        component: () => import("pages/Support.vue"),
        name: "Support"
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
