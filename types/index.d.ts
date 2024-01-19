export type Curry = {
  restaurant: string | null;
  description: {
    data: {
      description: string;
    };
  };
  url: string | null;
  date: string;
  images: {
    data: {
      id: string;
      attributes: {
        url: string;
        name: string;
      };
    }[];
  };
};
