export interface JobData {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  location: string[];
  logoUrl: string;
  orgName: string;
  orgEmail: string;
  deadline: string;
  datePosted: string;
  status: string;
  isPaid: boolean;
  isBookmarked: boolean;
  opType: string;
  requiredSkills: string[];
  categories: string[];
  applicantsCount: number;
  viewsCount: number;
  average_rating: number;
  total_reviews: number;
  paymentOption: {
    currency: string;
    paymentType: string;
  };
  whenAndWhere: string;
}
