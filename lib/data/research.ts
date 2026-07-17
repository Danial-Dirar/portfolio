/**
 * Research output — peer-reviewed papers with abstracts, and ongoing work.
 * Kept separate from `publications.ts` (the compact list used on /about);
 * this is the richer source for the /research page.
 */

export type ResearchStatus = "published" | "ongoing";

export type ResearchPaper = {
  id: string;
  title: string;
  status: ResearchStatus;
  authors: { name: string; self?: boolean }[];
  venue: string;
  year: number;
  /** e.g. "Vol. 16" — omitted for ongoing work. */
  volume?: string;
  doi?: string;
  abstract: string;
  /** Short human-facing topic tags. */
  topics: string[];
  /** A few pulled-out result highlights (optional). */
  highlights?: { value: string; label: string }[];
};

const A = (name: string, self = false) => ({ name, self });

export const research: ResearchPaper[] = [
  {
    id: "mar-potential-barind",
    title:
      "Engineering hydrological resilience: Quantitative assessment of managed aquifer recharge (MAR) potential utilizing advanced horizontal flow treatment in water-stressed regions",
    status: "published",
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
    volume: "Vol. 16",
    doi: "10.1007/s13201-025-02665-1",
    topics: ["Managed aquifer recharge", "Hydrology", "GIS", "Bangladesh"],
    highlights: [
      { value: "3,315", label: "feasible MAR sites identified" },
      { value: "27.1M m³", label: "recharge potential / year" },
      { value: "10,000×", label: "infiltration rate improvement" },
    ],
    abstract:
      "The water-stressed Barind Tract (BT) in northwest Bangladesh faces critical challenges in meeting irrigation and domestic water demands, with groundwater tables declining at rates of 0.09–0.39 m per year due to over-extraction and limited natural recharge through thick clay aquitards (21–39 m). This study evaluates the potential for managed aquifer recharge (MAR) across three districts of BT (Godagari, Niamatpur and Mohanpur) using integrated horizontal flow treatment units. We analyzed 376.68 km of re-excavated Kharies (natural canals) and 257.01 acres of Beels (water reservoirs), incorporating seventeen years (2005–2021) of groundwater monitoring data and nineteen years of rainfall analysis (2002–2020). Field-verified recharge rates of 29 L/min for Kharies and 162.7 L/min for Beels were used to calculate potential MAR installations using the rational formula. Our analysis identified 3,315 feasible MAR installation sites, capable of recharging 27.10 million m³ annually from 50.61 million m³ of surface runoff, achieving 53.5% utilization efficiency. The integrated treatment units overcame natural recharge limitations of 2–3 mm/day through thick clay aquitards, achieving a 10,000-fold improvement in infiltration rates. This assessment provides a scalable and replicable methodology for sustainable groundwater management strategies in water-stressed regions globally, with phased implementation offering a pathway to reverse groundwater depletion trends.",
  },
  {
    id: "mar-field-performance",
    title:
      "Design and field performance of an integrated horizontal flow treatment managed aquifer recharge system for groundwater rehabilitation in Bangladesh",
    status: "published",
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
    volume: "Vol. 15",
    doi: "10.1007/s13201-025-02588-x",
    topics: ["Managed aquifer recharge", "Water treatment", "Field study"],
    highlights: [
      { value: "97%", label: "turbidity reduction (68 → 2 NTU)" },
      { value: "2.01 m", label: "water-table rise over 7 years" },
      { value: "96%", label: "recharge rate recovered via backwash" },
    ],
    abstract:
      "The Barind tract in northwest Bangladesh faces severe groundwater challenges due to excessive extraction and limited recharge capacity, primarily caused by its thick top clay layer and intensive agricultural water demand. This study develops and evaluates an innovative horizontal flow treatment unit integrated with Managed Aquifer Recharge (MAR). The developed system demonstrated exceptional treatment efficiency, achieving 97.06% turbidity reduction (from 68 to 2 NTU), 87.31% removal of total suspended solids, and significant bacterial contamination reduction of 81.82% (TC) and 93.75% (FC), while maintaining all chemical parameters within ECR 2023 drinking water standards. Under controlled conditions, the initial recharge rate achieved 168.06 lpm, while during monsoon flooding, natural condition recharge ranged from 154.11 to 167.38 lpm. The system demonstrated remarkable sustainability, with 96% recovery of the original recharge rate possible through backwashing and maintenance, showing only a minimal annual decline of 3.43 lpm/year. Long-term monitoring revealed a 2.01 m water table rise over seven years (2015–2021). The innovative aspects include a novel horizontal flow design that reduces clogging, integrated pre-treatment for suspended solids, and an efficient self-cleaning mechanism through backwashing. This study demonstrates that the integrated MAR-treatment system provides a sustainable solution for groundwater management in water-stressed regions, addressing both water quantity and quality challenges while ensuring long-term operational viability.",
  },
  {
    id: "groundwater-level-prediction",
    title:
      "Deep learning for groundwater level prediction in the Barind Tract",
    status: "ongoing",
    authors: [A("Md. Danial Dirar", true)],
    venue: "Undergraduate thesis · in progress",
    year: 2026,
    topics: ["Machine learning", "Time-series", "Hydrology"],
    abstract:
      "My ongoing thesis builds machine-learning models that forecast groundwater levels from historical hydrological and climate signals — rainfall, temperature, and long-run well data across the water-stressed Barind region. The goal is a forecasting engine that turns the field data behind the MAR studies into forward-looking predictions, so recharge and extraction can be planned before the water table drops rather than after. This is the research engine behind Haifa Intelligence.",
  },
];

export const doiUrl = (doi: string) => `https://doi.org/${doi}`;
