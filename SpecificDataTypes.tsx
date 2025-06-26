export interface CommonData {
  title: string;
  description: string[]|string;
  uploaded_by: string;
  date_uploaded: string;
  image: string;
  category: string;
}

export interface SectionData {
  blog: CommonData[];
  services: CommonData[];
  tnc: CommonData[];
}
