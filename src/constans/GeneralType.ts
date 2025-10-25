export type AnimationImageType = {
  src: string;
  alt: string;
  styles?: string;
};

export type TypeServiceType = {
  id: number;
  typeServiceNameEs: string;
  descriptionEs?: string;
  icon?: string;
}

export type StateType = {
  id: number;
  stateName: string;
}

export type InfoCompanyType = {
  id: number;
  idUser: string;
  companyPictureUrl: string;
  companyName: string;
  generalDescription: string;
  typesServices: string;
  auxState: string;
  auxMunicipality: string;
  auxRating: number;
  instagram?: string;
  facebook?: string;
  webPage?: string;
}

export type LocationType = {
  id: string;
  latitude: number;
  longitude: number;
  auxState?: string;
  auxMunicipality?: string;
  reference?: string;
}

export type ProviderType = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  lada: string;
  phone: string;
  profilePicture: string;
  typeServices: string;
  infoCompanyDTO: InfoCompanyType;
  userLocationDTO: Location;
}

export type ResultPaginated = {
  isLast: boolean;
  items: [];
  pageNumber: 0;
  pageSize: number;
  totalElements: number;
  totalPages: number;
} 

export enum TAB_PROVIDER_SELECTED {
    INFO = 'info',
    ADDRESS = 'ADDRES',
    COMMENTS = "comments"
}

export type DetailProjectType = {
  id: number;
  fileUrl: string;
};

export type ProjectType = {
  id: number;
  nameService: string;
  minPrice?: number;
  maxPrice?: number;
  totalElement?: number;
  catalogUserServiceDetailDTO?: DetailProjectType;
};

export type ModalCustomProps = {
  open: boolean;
  handleClose: () => void;
}

export type QualificationType = {
    id: number;
    nameClient: string;
    rating: number;
    comment?: string;
    createdAt?: string;
}

export type CommentsType = {
  rating: number;
  listComments: Array<QualificationType> | []
}