export const REACT_QUERY_KEYS = {
    catalog: {
        getTypeServices: (key:string) => `catalog-get-type-services-${key}`,
        getStates: (key: string) => `catalog-get-states-${key}`,
        services: {
            getByUserId: (key: string) => `catalog-services-get-by-user-id-${key}`,
            getProjectById: (key: number) => `catalog-services-project-by-id-${key}`
        },
        lada: {
            getAll: (key: string) => `get-all-lada-${key}`
        }
    },
    provider: {
        getProviders: (key: string) => `provider-get-providers-${key}`,
        getInfoProvider: (key: string) => `provider-get-info-provider-${key}`,
        getLocationProvider:(key: string) => `provider-get-location-provider-${key}`,
        getRatingsByProvider: (key: string) => `provider-get-ratings-by-provider-${key}`,
        getPublicInfoProvider: (key: string) => `public-info-provider-${key}`,
        getTimesProviderToSchedule: (key: string) => `times-provider-to-schedule-${key}`,
        getMenuServicesByProvider: (key: string) => `menu-services-by-provider-${key}`
    }
}