import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { loginProfile } from '../../redux/actions/mainActions'

/* utils */
import { absoluteUrl, authMiddlewareRole } from '../../middleware/utils';

/* components */
import Layout from '../../components/layout/Layout';
import FormLogin from '../../components/form/FormLogin';


function Login(props) {
  const router = useRouter();
  const { origin, referer, baseApiUrl } = props;
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  return (
    <Layout
      title="Next.js with Sequelize | Login page"
      url={`${origin}${router.asPath}`}
      origin={origin}
    >
      <div className="container">
        <main className="content-detail">
          
        </main>
      </div>
    </Layout>
  );
}

/* getServerSideProps */
export async function getServerSideProps(context) {
  
    authMiddlewareRole(context, 'admin'); // protect router
  const { req } = context;
  const { origin } = absoluteUrl(req);

  const referer = req.headers.referer || '';
  const baseApiUrl = `${origin}/api`;

  return {
    props: {
      origin,
      referer,
      baseApiUrl,
    },
  };
}

export default Login;
