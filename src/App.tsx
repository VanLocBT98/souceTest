import './App.scss';
import React, {
  useEffect, useState, lazy, Suspense
} from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loading from 'components/atoms/Loading';
import MainLayoutContainer from 'container/MainLayout';

const NewsDetail = lazy(() => import('pages/NewsDetail'));
const AboutUs = lazy(() => import('pages/AboutUs'));
const Home = lazy(() => import('pages/Home'));
const ContactUs = lazy(() => import('pages/ContactUs'));
const NewsOverview = lazy(() => import('pages/NewsOverview'));
const InvestmentDetail = lazy(() => import('pages/InvestmentDetail'));
const BUSDetail = lazy(() => import('pages/BusDetail'));
const NewsCategory = lazy(() => import('pages/NewsCategory'));
const Recruitment = lazy(() => import('pages/Recruitment'));
const Search = lazy(() => import('pages/SearchResult'));
const Recruitmentdetail = lazy(() => import('pages/Recruitmentdetail'));

interface GoogleReCaptchaWrapperProps {
  children: React.ReactNode;
}

const googleRecaptchaSiteKey = 'googleRecaptchaSiteKey';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/ve-chung-toi',
    element: <AboutUs />,
  },
  {
    path: '/lien-he',
    element: <ContactUs />,
  },
  {
    path: '/tin-tuc',
    element: <NewsOverview />,
  },
  {
    path: '/tin-tuc/chi-tiet',
    element: <NewsDetail />
  },
  {
    path: '/chi-tiet-linh-vuc-dau-tu',
    element: <InvestmentDetail />
  },
  {
    path: '/chi-tiet-bus',
    element: <BUSDetail />
  },
  {
    path: '/tuyen-dung',
    element: <Recruitment />
  },
  {
    path: '*',
    element: <Home />
  },
  {
    path: '/tin-tuc/tin-tuc-chung',
    element: <NewsCategory />
  },
  {
    path: '/tim-kiem',
    element: <Search />
  },
  {
    path: '/chi-tiet-tuyen-dung',
    element: <Recruitmentdetail />
  },
];

const App: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading variant="fullScreen" />}>
      <Routes>
        <Route path="/" element={<MainLayoutContainer />}>
          {routes.map((route, index) => (
            <Route
              key={`route-${index.toString()}`}
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

const GoogleReCaptchaWrapper: React.FC<GoogleReCaptchaWrapperProps> = ({
  children,
}) => {
  const [key, setKey] = useState<string>();
  // TODO: get real gcaptchakey from serve
  useEffect(() => {
    if (googleRecaptchaSiteKey) {
      setTimeout(() => {
        setKey(googleRecaptchaSiteKey);
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [googleRecaptchaSiteKey]);

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={key}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

const AppWrapper: React.FC = () => (
  <GoogleReCaptchaWrapper>
    <App />
  </GoogleReCaptchaWrapper>
);

export default AppWrapper;
