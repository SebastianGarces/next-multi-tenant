export type Tenant = {
	name: string;
	description: string;
};

export type AllowedTenant = "tenant1" | "tenant2";

export type TenantList = {
	[keyof in AllowedTenant]: Tenant;
};

export const tenants: TenantList = {
	tenant1: {
		name: "tenant1",
		description: "This is the description of tenant1 📃",
	},
	tenant2: {
		name: "tenant2",
		description: "This is the description of tenant2 🧻",
	},
};
