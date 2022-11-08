// import Footer from '@/components/Footer';
// import RightContent from '@/components/RightContent';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
// import { history } from '@umijs/max';
// import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';
// import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';

// const isDev = process.env.NODE_ENV === 'development';
// const loginPath = '/user/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  // const fetchUserInfo = async () => {
  //   try {
  //     const msg = await queryCurrentUser({
  //       skipErrorHandler: true,
  //     });
  //     return msg.data;
  //   } catch (error) {
  //     history.push(loginPath);
  //   }
  //   return undefined;
  // };

  // if (window.location.pathname !== loginPath) {
  //   const currentUser = await fetchUserInfo();
  //   return {
  //     fetchUserInfo,
  //     currentUser,
  //     settings: defaultSettings,
  //   };
  // }
  // return {
  //   fetchUserInfo,
  //   settings: defaultSettings,
  // };
  return {}
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    // rightContentRender: () => <RightContent />,
    rightContentRender: () => <></>,
    // footerRender: () => <Footer />,
    onPageChange: () => {
      // const { location } = history;
      // if (!initialState?.currentUser && location.pathname !== loginPath) {
      //   history.push(loginPath);
      // }
    },
    layoutBgImgList: [],
    links: [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children, props) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {!props.location?.pathname?.includes('/login') && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  ...errorConfig,
};
