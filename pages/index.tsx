import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { AllowedTenant, Tenant, tenants } from "../tenants";

interface HomePageProps {
	tenant: Tenant;
}

export default function Home({ tenant }: HomePageProps) {
	return (
		<div className={styles.container} style={{ backgroundColor: "rgb(15, 15, 19)" }}>
			<Head>
				<title>{tenant.name}</title>
				<meta name="description" content={tenant.description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 style={{ marginBottom: "3rem" }}>Next JS Multi Tenant</h1>
			<h2 style={{ margin: "0" }}>{tenant.name} 🎖️</h2>
			<h3>{tenant.description}</h3>
		</div>
	);
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
	const subdomain = req.headers.host?.split(".")[0] as AllowedTenant;
	const tenant = tenants[subdomain];

	const isAllowedTenant = subdomain in tenants;
	if (!isAllowedTenant) return { notFound: true };

	return {
		props: {
			tenant,
		},
	};
}
