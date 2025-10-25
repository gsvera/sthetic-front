export const REACT_QUERY_KEYS = {
    catalog: {
        getTypeServices: (key:string) => `catalog-get-type-services-${key}`,
        getStates: (key: string) => `catalog-get-states-${key}`,
        services: {
            getByUserId: (key: string) => `catalog-services-get-by-user-id-${key}`,
            getProjectById: (key: number) => `catalog-services-project-by-id-${key}`
        }
    },
    provider: {
        getProviders: (key: string) => `provider-get-providers-${key}`,
        getInfoProvider: (key: string) => `provider-get-info-provider-${key}`,
        getLocationProvider:(key: string) => `provider-get-location-provider-${key}`,
        getRatingsByProvider: (key: string) => `provider-get-ratings-by-provider-${key}`
    }
}