interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['End Customer'],
  tenantRoles: ['Owner', 'Team Member', 'Analyst', 'Administrator'],
  tenantName: 'Firm',
  applicationName: 'bondavada',
  addOns: [],
};
