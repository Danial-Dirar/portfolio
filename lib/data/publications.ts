/**
 * Peer-reviewed publications, newest first.
 *
 * `doi` is the source of truth for the link — we always send people to the
 * canonical https://doi.org/<doi> resolver so it survives publisher URL changes.
 * Mark the studio author(s) with `self: true` so the UI can highlight them in
 * the author list (and so a teammate's name can be flagged the same way later).
 */
export type Publication = {
  title: string;
  authors: { name: string; self?: boolean }[];
  venue: string;
  year: number;
  doi: string;
  /** Short, human label for the contribution type. */
  type: string;
};

const A = (name: string, self = false) => ({ name, self });

export const publications: Publication[] = [
  {
    title:
      "Engineering hydrological resilience: Quantitative assessment of managed aquifer recharge (MAR) potential utilizing advanced horizontal flow treatment in water stressed regions",
    authors: [
      A("Md. Iquebal Hossain"),
      A("Md. Niamul Bari"),
      A("Md. Danial Dirar", true),
      A("Abdulla Al Kafy"),
      A("Hamad Ahmed Altuwaijri"),
      A("Tekalign Ketema Bahiru"),
    ],
    venue: "Applied Water Science",
    year: 2026,
    doi: "10.1007/s13201-025-02665-1",
    type: "Journal article",
  },
  {
    title:
      "Design and field performance of an integrated horizontal flow treatment managed aquifer recharge system for groundwater rehabilitation in Bangladesh",
    authors: [
      A("Md. Iquebal Hossain"),
      A("Md. Niamul Bari"),
      A("Md. Danial Dirar", true),
      A("Abdulla Al Kafy"),
      A("Hamad Ahmed Altuwaijri"),
      A("Tekalign Ketema Bahiru"),
    ],
    venue: "Applied Water Science",
    year: 2025,
    doi: "10.1007/s13201-025-02588-x",
    type: "Journal article",
  },
];

export const doiUrl = (doi: string) => `https://doi.org/${doi}`;
