interface AppRoute {
  path: string;
  name: string;
  exact: boolean;
  component: React.ComponentType<any>;
}

export const routes: AppRoute[] = [
  // {
  //   path: dynamicPaths.HOME,
  //   action: null,
  //   component: HomePage
  // },
];