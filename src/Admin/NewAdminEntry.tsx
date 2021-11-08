// routes
import Router from '../Portal/routes';
// theme
import ThemeConfig from '../Portal/theme';
import GlobalStyles from '../Portal/theme/globalStyles';
// hooks
import useAuth from '../Portal/hooks/useAuth';
// components
import Settings from '../Portal/components/settings';
import RtlLayout from '../Portal/components/RtlLayout';
import ScrollToTop from '../Portal/components/ScrollToTop';
import GoogleAnalytics from '../Portal/components/GoogleAnalytics';
import NotistackProvider from '../Portal/components/NotistackProvider';
import ThemePrimaryColor from '../Portal/components/ThemePrimaryColor';
import ThemeLocalization from '../Portal/components/ThemeLocalization';
import { BaseOptionChartStyle } from '../Portal/components/charts/BaseOptionChart';
import LoadingScreen, { ProgressBarStyle } from '../Portal/components/LoadingScreen';

// ----------------------------------------------------------------------

export default function App() {
  const { isInitialized } = useAuth();

  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <ThemeLocalization>
          <RtlLayout>
            <NotistackProvider>
              <GlobalStyles />
              <ProgressBarStyle />
              <BaseOptionChartStyle />
              <Settings />
              <ScrollToTop />
              <GoogleAnalytics />
              {isInitialized ? <Router /> : <LoadingScreen />}
            </NotistackProvider>
          </RtlLayout>
        </ThemeLocalization>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}
