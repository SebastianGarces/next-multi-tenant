import Link from "next/link";
import { tenants } from "../tenants";
import styles from "../styles/404.module.css";

export default function NotFound() {
	return (
		<div className={styles["page-container"]}>
			<h1>Page not found. 😖</h1>
			<div className={styles["btn-container"]}>
				{Object.values(tenants).map((tenant) => (
					<Link key={tenant.name} href={`http://${tenant.name}.localhost:3000`} replace={true}>
						<a className={styles.btn}>Back to {tenant.name}</a>
					</Link>
				))}
			</div>
		</div>
	);
}
