"use client";
import Image from "next/image";
import Link from "next/link";
import Faq from "@/src/components/web/Faq";
import StepsApply from "@/src/components/web/StepsApply";
import Document from "@/src/components/web/Document";
import { useEffect, useState } from "react";
import DatePicker from "@/src/components/admin/form/date-picker";

import PaginationStepper from "@/src/components/admin/PaginationStepper";
import SignatureBox from "@/src/components/admin/SignatureBox";
import Radio from "@/src/components/admin/form/input/Radio";
import { text } from "stream/consumers";
import TextArea from "@/src/components/admin/form/input/TextArea";
import { number, string } from "zod";
import Checkbox from "@/src/components/admin/form/input/Checkbox";
import Input from "@/src/components/admin/form/input/InputField";
import {
  saveHomeImprovementApplication,
  getHomeImprovementApplicationById,
} from "../../../../services/web/services";
import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";

import Select from "@/src/components/admin/form/Select";

export default function ServiceDetails() {
  type FormErrors = {
    applicantName?: string;
    applicantProperty?: string;
    email?: string;
    phoneCell?: string;
    phoneWork?: string;
    phoneHome?: string;
    address?: string;
    country?: string; 
  state?: string;   
  city?: string;


    // Step 2 fields
    householdMembers?: string;

    // Step 3 fields
    resideAddress?: string;
    propertyOwnedDuration?: string;
    taxesPaid?: string;

    // Step 4 fields
    applicantEmployerName?: string;
    applicantEmployerAddress?: string;
    coApplicantEmployerName?: string;
    coApplicantEmployerAddress?: string;

    //step 5 fields
    renovationDetails?: string;
    maintenanceHeatingCooling?: boolean;
    maintenancePlumbing?: boolean;
    maintenanceElectrical?: boolean;
    maintenanceAppliances?: boolean;
    maintenanceDoorsWindows?: boolean;
    maintenanceFlooringWalls?: boolean;
    maintenancePest?: boolean;
    maintenanceSafety?: boolean;
    maintenanceOtherText?: string;
    maintenanceHeatingCoolingText?: string;
    maintenancePlumbingText?: string;
    maintenanceElectricalText?: string;
    maintenanceAppliancesText?: string;
    maintenanceDoorsWindowsText?: string;
    maintenanceFlooringWallsText?: string;
    maintenancePestText?: string;
    maintenanceSafetyText?: string;

    // Step 6 fields
    grossAnnualIncome?: string;

    // Step 7 fields
    totalPersons?: string;
    childrenUnder18?: string;

    // Step 8
    hasMortgage?: string;
    mortgageAmount?: string;
    mortgageBalance?: string;
    paymentStatus?: string;
    mortgagee?: string;

    monthlyLiabilities?: {
      payee?: string;
      amount?: string;
    }[];

    // Step 9 fields
    certificationSignature?: string;
    certificationSignerName?: string;
    certificationDateTime?: string;
  };

  type ApplicantFormData = {
    applicantName: string;
    applicantProperty: string;
    email: string;
    phoneCell: string;
    phoneWork: string;
    phoneHome: string;
    address: string;
    country: string;
    state: string;
    city: string;



    householdMembers: HouseholdMember[];

    // Step 3 fields
    resideAddress: string;
    propertyOwnedDuration: string;
    taxesPaid: string;

    // Step 4 fields
    applicantEmployerName: string;
    applicantEmployerAddress: string;
    coApplicantEmployerName: string;
    coApplicantEmployerAddress: string;

    //step 5 fields
    renovationDetails: string;
    maintenanceHeatingCooling: boolean;
    maintenancePlumbing: boolean;
    maintenanceElectrical: boolean;
    maintenanceAppliances: boolean;
    maintenanceDoorsWindows: boolean;
    maintenanceFlooringWalls: boolean;
    maintenancePest: boolean;
    maintenanceSafety: boolean;
    maintenanceOtherText: string;
    maintenanceHeatingCoolingText: string;
    maintenancePlumbingText: string;
    maintenanceElectricalText: string;
    maintenanceAppliancesText: string;
    maintenanceDoorsWindowsText: string;
    maintenanceFlooringWallsText: string;
    maintenancePestText: string;
    maintenanceSafetyText: string;

    // Step 6 fields
    grossAnnualIncome: string;

    // Step 7 fields
    totalPersons: string;
    childrenUnder18: string;

    // Step 8 fields
    hasMortgage: string;
    mortgageAmount: string;
    mortgageBalance: string;
    paymentStatus: string;
    mortgagee: string;
    monthlyLiabilities: { payee: string; amount: string }[];

    // Step 9 fields
    certificationSignature: string;
    certificationSignerName: string;
    certificationDateTime: string;

    // Step 10 fields
    numberOfUnits: string; // "1" | "2" | "3+"
  };

  type HouseholdMember = {
    name: string;
    age: number;
  };

  type CountryKey = "India" | "United States" | "United Kingdom" | "Canada" | "Australia";
  type CityMap = Record<string, { label: string; value: string }[]>;

const stateOptions: Record<CountryKey, { label: string; value: string }[]> = {
  India: [
    { label: "Maharashtra", value: "Maharashtra" },
    { label: "Gujarat", value: "Gujarat" },
  ],
  "United States": [
    { label: "California", value: "California" },
    { label: "Texas", value: "Texas" },
  ],
  "United Kingdom": [],
  Canada: [],
  Australia: [],
};


const { control, formState: { errors: rhfErrors } } = useForm();



  const searchParams = useSearchParams();
  const isReadOnly = searchParams.get("mode") === "view";

  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState<ApplicantFormData>({
    applicantName: "",
    applicantProperty: "",
    email: "",
    phoneCell: "",
    phoneWork: "",
    phoneHome: "",
    address: "",
    country: "",
    state: "",
    city: "",

    

    householdMembers: [{ name: "", age: 0 }],

    // Step 3 fields
    resideAddress: "",
    propertyOwnedDuration: "",
    taxesPaid: "",

    // Step 4 fields
    applicantEmployerName: "",
    applicantEmployerAddress: "",
    coApplicantEmployerName: "",
    coApplicantEmployerAddress: "",

    //step 5 fields
    renovationDetails: "",
    maintenanceHeatingCooling: false,
    maintenancePlumbing: false,
    maintenanceElectrical: false,
    maintenanceAppliances: false,
    maintenanceDoorsWindows: false,
    maintenanceFlooringWalls: false,
    maintenancePest: false,
    maintenanceSafety: false,
    maintenanceOtherText: "",
    maintenanceHeatingCoolingText: "",
    maintenancePlumbingText: "",
    maintenanceElectricalText: "",
    maintenanceAppliancesText: "",
    maintenanceDoorsWindowsText: "",
    maintenanceFlooringWallsText: "",
    maintenancePestText: "",
    maintenanceSafetyText: "",

    // Step 6 fields
    grossAnnualIncome: "",

    // Step 7 fields
    totalPersons: "",
    childrenUnder18: "",

    // Step 8 fields
    hasMortgage: "",
    mortgageAmount: "",
    mortgageBalance: "",
    paymentStatus: "",
    mortgagee: "",
    monthlyLiabilities: [{ payee: "", amount: "" }],

    // Step 9 fields
    certificationSignature: "",
    certificationSignerName: "",
    certificationDateTime: "",

    // Step 10 fields
    numberOfUnits: "1",
  });

useEffect(() => {
    if (isReadOnly) {
      setFormData({
        // Step 1: Personal Info
        applicantName: "John Doe",
        applicantProperty: "456 Oak Avenue, Springfield, NY 10001",
        email: "john.doe@example.com",
        phoneCell: "555-0199",
        phoneWork: "555-0200",
        phoneHome: "555-0201",
        address: "456 Oak Avenue, Springfield, NY 10001",
        country: "india",
        state: "maharashtra",
        city:"pune",


        // Step 2: Household
        householdMembers: [
          { name: "Jane Doe", age: 34 },
          { name: "Billy Doe", age: 8 }
        ],

        // Step 3: Property Details (Values must be lowercase "yes"/"no")
        resideAddress: "yes", 
        propertyOwnedDuration: "5 Years",
        taxesPaid: "yes",

        // Step 4: Employment
        applicantEmployerName: "Global Tech Solutions",
        applicantEmployerAddress: "123 Business Way, New York, NY",
        coApplicantEmployerName: "Springfield Elementary",
        coApplicantEmployerAddress: "456 School Lane, Springfield, NY",

        // Step 5: Maintenance & Renovation
        renovationDetails: "Complete kitchen remodeling, roof shingle replacement, and energy-efficient window installation.",
        maintenanceHeatingCooling: true,
        maintenancePlumbing: true,
        maintenanceElectrical: false,
        maintenanceAppliances: true,
        maintenanceDoorsWindows: true,
        maintenanceFlooringWalls: false,
        maintenancePest: false,
        maintenanceSafety: true,
        maintenanceOtherText: "Gutter cleaning and repair",
        maintenanceHeatingCoolingText: "New HVAC Unit",
        maintenancePlumbingText: "Pipe insulation",
        maintenanceElectricalText: "",
        maintenanceAppliancesText: "Energy Star Refrigerator",
        maintenanceDoorsWindowsText: "Double-pane glass",
        maintenanceFlooringWallsText: "",
        maintenancePestText: "",
        maintenanceSafetyText: "Smoke detector installation",

        // Step 6: Income
        grossAnnualIncome: "75000",

        // Step 7: Household Stats
        totalPersons: "3",
        childrenUnder18: "1",

        // Step 8: Financials
        hasMortgage: "yes",
        mortgageAmount: "1200",
        mortgageBalance: "185000",
        paymentStatus: "Current",
        mortgagee: "First National Bank",
        monthlyLiabilities: [
          { payee: "Car Loan - Toyota", amount: "350" },
          { payee: "Student Loan", amount: "200" }
        ],

        // Step 9: Certification
        certificationSignature: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAAC0CAYAAAB7RE0FAAAAAXNSR0IArs4c6QAAHS9JREFUeF7tnQvwd0VZx7++vFwERC5iaEBoSeJ4GZVigtFqKotIG2WqKbqYQ3aZ7iUTTmWXyYIcy5qmrKgZR51uOOooVDZTdFGSpBShTEYNCEKQm3IRsPo/zDmyHM7v9zvn7O7Z2+fMvAPv+z+7+zyfZ8853//us7uPERcEIAABCEAAAhBoiMBjGvIVVyEAAQhAAAIQgIAQP3QCCEAAAhCAAASaIoD4aSrcOAsBCEAAAhCAAOKHPgABCEAAAhCAQFMEED9NhRtnIQABCEAAAhBA/NAHIAABCEAAAhBoigDip6lw4ywEIAABCEAAAogf+gAEIAABCEAAAk0RQPw0FW6chQAEIAABCEAA8UMfgAAEIAABCECgKQKIn6bCjbMQgAAEIAABCCB+6AMQgAAEIAABCDRFAPHTVLhxFgIQgAAEIAABxA99AAIQgAAEIACBpgggfpoKN85CAAIQgAAEIID4oQ9AAAIQgAAEINAUAcRPU+HGWQhAAAIQgAAEED/0AQhAAAIQgAAEmiKA+Gkq3DgLAQhAAAIQgADihz4AAQhAAAIQgEBTBBA/TYUbZyEAAQhAAAIQQPzQByAAAQhAAAIQaIoA4qepcOMsBCAAAQhAAAKIH/oABCAAAQhAAAJNEUD8NBVunIUABCAAAQhAAPFDH4AABCAAAQhAoCkCiJ+mwo2zEIAABCAAAQggfugDEIAABCAAAQg0RQDx01S4cRYCEIAABCAAAcQPfQACEIAABCAAgaYIIH6aCjfOLiDwEknnSPo+SXctKE8RCEAAAhDIjADiJ7OAYE5WBK6U9NzOov+VdEBW1mEMBCAAAQgsIoD4WYSNQg0Q+JykfY6fiJ8Ggo6LEIBAGwQQP23EGS+nEzhZ0n9IGj4b/zcQQ9Nr5E4IQAACEMiKAOInq3BgTGIC90s6cIMNiJ/EwaF5CEAAAqEIIH5CkaSe0gnYtJb7PPRix/5rF+Kn9AhjPwQgAIGOAOKHrtA6geslHT+AYPk++x3Rg/hpvZfgPwQgUBUBxE9V4cSZmQSGoz1WfCzXB/EzEyy3QwACEMiZAOIn5+hgWywCD44sW9+0motpr1hRoF4IQAACiQggfhKBp9kkBH5a0oUjuT1nSvqrDRYhfpKEikYhAAEIxCOA+InHlprzIjDct8ese0DSQTvMRPzkFUesgQAEIOBNAPHjjZAKMifwSUnHDmycs3IL8ZN5gDEPAhCAwFwCiJ+5xLi/JAJjy9f/UNIrZziB+JkBi1shAAEIlEAA8VNClLBxLoGxhGZ3+fqc+hA/c2hxLwQgAIECCCB+CggSJk4m8KeSvtVjimusIcTPZPzcCAEIQKAMAoifMuKElbsJjO3Z835Jp+0uuvUOxI8nQIpDAAIQyI0A4ie3iGDPXAJ37y1fP3RQKOQJ7IifuRHhfghAAAKZE0D8ZB4gzNtKYNN5XCGxIX5C0qQuCEAAAhkQQPxkEARMWERgmNR8h6SjFtW0vRDiJwJUqoQABCCQkgDiJyV92l5K4I8lvdwpHLMfI36WRolyEIAABDIlEPOjkanLmFUBgV6QmCsXSTo3ok+In4hwqRoCEIBACgKInxTUadOHgJvns3TvnjntI37m0OJeCEAAAgUQQPwUECRM/DwBO4trf/e3OUdU+CBE/PjQoywEIACBDAkgfjIMCiaNEjh/7xDS1zo/WavvIn7okBCAAAQqI7DWB6QybLiTgICb5/Mvkr5sJRsQPyuBphkIQAACaxFA/KxFmnZ8CLh5PiE3MJxiE+JnCiXugQAEIFAQAcRPQcFq1NT7JR3Y+b5Wno+LGvHTaMfDbQhAoF4CiJ96Y1uDZ2dJepfjSIr+ivipoSfhAwQgAIHEHxMCAIGpBNw8n/+SdNLUggHvQ/wEhElVEIAABHIgkOI36Rz8xob8CdgePvs6M9fO8xmb9kppQ/7RwkIIQAACBRFA/BQUrIZMdU9qT5HnMyZ+7CyxPveooVDgKgQgAIH6CCB+6otp6R7ZaI+N+vRXyj76J5K+rTMkpR2lxxT7IQABCGRFgBd6VuHAGEnusvZ7JB2WkIo79cazkjAQNA0BCEAgJAFe6CFpUpcvgVzyfHo/XCHGs+IbXcpDAAIQyIQAL/RMAoEZ+oSkL8pkugvxQ4eEAAQgUDEBxE/FwS3MNXdZ+zdKujQD+1nmnkEQMAECEIBAaAKIn9BEqW8JAXd6yU5uP2hJJRHKIH4iQKVKCEAAAqkJIH5SR4D23Tyf1Mvah9HoxY/ZuJ9QQQACEIBAHQQQP3XEsVQvrtg7vuJUx/ic+uPLJF3c2Xa2pLeVChm7IQABCEDgkQRy+tgQm/YIuHk+F0k6NyMEtqnhAZ09PCcZBQZTIAABCPgS4KXuS5DySwm4eT45TiuxzH1pZCkHAQhAIHMCiJ/MA1SxebknEyN+Ku58uAYBCLRNAPHTdvxTeX+zpCd2jV8p6fmpDNnSbu7iLENkmAQBCECgDAKInzLiVJuVJYyqIH5q63X4AwEIQKAjgPihK6QgUIKw6G00odYnPqdgRZsQgAAEIBCYAOInMFCqm0SgBGHR2/ifkr50klfcBAEIQAACRRBA/BQRpqqMLOGk9M84p8nzjFTV/aI7427fYI3Rf6IjpwEIzCfAgzmfGSX8CJSQ71OCQPOLAqVjERiKHwRQLNLUCwEPAogfD3gFFr1M0gtGfhtd81iJEvJ9ShBoBXa/Jkzu+/cdko50POZd20T4cbIUAjyQpUTKz84bJR03YQj+DEnv9Wtqa2l3ifv1kk6M2JZP1YgfH3ptl+3Fj71bf1nSzyKA2u4QeJ8nAcRPnnEJZdV9kg4eqWxbXkLM3ZZLERUljE6F6iPUE47Aj0p6Q1dd/259vaSfQACFg0xNEAhBAPETgmJ+ddwi6ZiRkZ5Ny7bdHBfzJpYAKkVUlLAaLb9eh0WXSDpzIH7sr2+U9EoEEB0EAvkQQPzkE4tQlrijK32dU/aqeZ2kn3KMiCGAShEVvZ0PSDooVGCop3oC10r64hHxY//0ZknnOARMKJ1VPREchECmBBA/mQZmgVlLRc+wKXdKLKQAKmUF1QckPW/DB2xBWCjSEIE7JR2xpe/8haSzHR72rH13J4wawoSrEEhPAPGTPga+FgynrKw+39VbMaanSsn3KUWk+fYbyocncL+kA3cI51fv3fMrg6bvlnR4eHOoEQIQ2EQA8VNu3/jsyJSMiZb3SbJVWz5XDKESQ1D5+LipbAzfY9hJnfkRmCOcr5B06sAF+7uNPHJBAAKRCSB+IgOOUP3tkh4/kswcMj/lQec8qxB95EOSntWxuErSsyNwCVVlSvFj3PcNYmv2nCLJjtngypvAkr7j7iZu3lkd9sf+/Q8kXSjp1rzdxjoIlEcgxIetPK/LtThUXs8UAv1IjQ3ljy2Xn1JHf8+Sj8Kc+kPeu/YI1di05SZ/piSuh2RBXfMILO07r5V0/pambJ+uj3Y/t41KXzPPLO6GAASGBBA/ZfSJMdHjm9ezy/OlL/KxekPWtctu35/HtPV/JB3bjezsevbMjk33hBzl8+VF+YcJ+PQdW2n5Ikn/LemerspvlnT8APANkk4AOgQg4Edg1wvYr3ZK+xLYlMx8mKR7fSvfUd5d9eXbT0pZ4m5Ielt9V7rZbtZPmCh0+nZt2mtsaf1YP/CNSeTu02T1fd+xOPaJz74gbBf050uy6W67Psw0mC9SykOAE4dz7gNjByRakvMhKxkdSvzMSQJdybWtzbjHE0y15zYnD2uqKLF27M8BUxvpNp+0nCC7fMXZjGa5dSKBvu+wemsiMG6DQCoCU1/Uqexrtd3hNFeKXI9Q4qekfJ8pid72G7jt5WLPztTnpxc6VtZGg3yuUHHxsYGy4wT62NjU1XC6CmYQgEBGBKa+vDMyuXpThsInVYxCfWR98iDWDvZQqNmmdbb/yhKhY2WPjuCAO5LG6E8EwB5V9n39cklf4VEPRSEAgcgEUn1YI7tVbPW5CB8DGEL8fETSyV00ck/UvEvS42b2nH5Ex8oeNbOsz+0hYuPTPmW3j/zYJobuae7wggAEMiOA+MknIDkJn1DiJ9cpr0/v7Z9y6IIRHeNiQufIxN3GnZ5LMSWa2P0sm/+gs38V79UsQ4RREHiYAA9pHr0hN+ETSvzkNOXlCoYpUe83mrMNJXO8GP3JKyq5Cv28KGENBDIhgPhJH4gchU9o8ZNydGJsjyQ36v3Ule2t0p+vlNLeqT3SPd4k9p5PU21q+b5QWyS0zBDfIbAaAcTPaqhHG8pV+LjiZ+mHNeUSdxMGts/KWP825iZ0xvJ7+g/YxyU9NW3XmNQ6ow2TMEW/6c8kfUvXyvdL+v3oLdIABCDgRQDx44XPq3DOwscVP0tHQVJ8mDcdFWGi5jpJJ22JmHvGUinPxS3O0vmlItWrE1P4IQIp+jroIQABDwKlvOQ9XMyyaO7Cx3YZttETu5aOgqyV73ONpKdvGeWxqawpu2GnHKny6aRuX7Iz2OwsNq51CazV19f1itYgUDEBxM/6wc1d+BiREEIg9m/D2xKYTezYaq45V2x759gy597fkvQjXQFGf+aQC3PveZIu6Kr6XUk/FKZaaoEABGISQPzEpPvouksQPmZ1CCHwKWeTv7dLemkA1C+W9I4Nozz24TcR8DsL2yl59ZQbr7+T9NULGVBsPoEpu4LPr5USEIBAVAKIn6h4H1F5KcLHjA4lBEJNB9hUzv4NoifUIZKhbF2vRz3cku0kbWKzF65zzgsLZe+5kk7fy616RagKC6mn5H5TCGLMhEB4Aoif8Ew31RhKUKxhcagXuq/P2xKYL3ZW2IRgEsrnELYsqaO3f2mC+pI23TKlrZTz9bcv3/v9AUmnhqqUeiAAgbgEED9x+fa1u6M+truwHYyZ8xVKCCyZPrNDIZ+0JYE51qhGavHg2x9S2n+GpH/sHCihf/uy7su7ey3xLg1FlXogsAIBHtgVIAecRlrD2q+S9LddQ3Y4p89RDpaj886urjt2nH+1LYHZpr1sJVPMK6V4COFXSvtvc2Lr22dCsFirDt+RzbXspB0IQGBAAPETv0uUdg5TiJVeLtVto0hnS/rzLQnMJp7eHT9ED7VQ+g69KcWPO8J3lXPG1UqhS9ZMz/xmSccls4KGIQCB2QQQP7ORzS5Q2m+HS6aqtkEZq29bArOJL0tuXvvq42SbHc493X1tW8faSyl+SuvjIeJlI5n9uW+8R0MQpQ4IrEiAhzYubDcnIFUi6lwPQ3/I3JEkq3usz9m/3yjp+LnGBry/99tyV14QsN61qkolflrdZTr0c7JWP6EdCEBgw4cIMOEIhB5FCWfZ5ppCv9RvlXTMhuZyEoS936X+QpBK/Lj9xf5/3xqdNIM2er+XbKiZgfmYAIG2CZT6oi8hanasgq18sauUj8Llkk7rbH5Akh1zsfTatkzd8qB86l5q06ZyVzjLlEt9JlKIH3fUx9immrIM3R921fdRSV/S3VRqf9nlIz+HQNUEeHDjhbfEUR9fm+1ICcuZ2davcuxzJlJNrNqVo31TemkK8eOO+piNJgpOnmJs4ff4PieFu4/5ECifQKkv+tzJf6GkGzojSxn16UeoerZz+oaNEm1KUrYPhY0IHJixuKjhiIK1xc9w1Kdk4Tj3fVL6ysC5/nI/BKojMOcDV53zER0q9TfDuR/Q4ZEdPVKr5/ZBrs/cuiOG51FVh17ev6btLnP7/7XyqIajPq2IHztb7iUd9J/cW/H1GymCTZsQgIAfAcSPH79NpUMnDcex8pG1ugLAtum37frHrrv3TrF+7JZVW5sSXl2hZLs4p1zZNfSrdPFjWwf0I2tr5N0Mk5z790gL75NSf7FZ4x1CGxAohkALL6sUwShR/Ox6qW9KYDa+Uw4Xfc3ejb/gBCOnvrfL9xR9aE6ba/W3qyU9wzGsny5sSfz0rEuazp7Tl7gXAk0QyOkDVBPwtT5GIZltsnnb1NbcZc1ubk1OH4+SxY876hNzymuY13WtpKd102ytiJ9f2stf+7nuoXuzpO8K+QBSFwQgsB4BxE8c1v3HNKcP/C5Px3I4xsr4fmBdoeFb1y6fpv68ZPGzhtAeCuBflfTqDm5LIyGlT49OfR64DwLVE0D8xAnx27ukyDdJenmcJoLXuk382M/u8jzk1DXYbSuH/J9Sxc8aoz5D4TN8Z7QkflryNfgLhgohkBMBxE9O0Uhri01JDaex7GV/hCRLcg55/bOkL3cqTN0PSxU/sUd9honNY9Oc/T33dYnwIftJbnX1vv6rpOflZhz2QAAC0wmk/uhMt5Q7ayMwPPNrbv5QSB4l/kbvnhsXeoXXUJxum57s2b1H0otCBiWzutycJ96bmQUHcyAwlwAP8Vxi3B+SQC75PyWKn1ijPq6osljfuWW688f2fvabXYeo/V0Si3fI54m6IACBiQRqf2FNxMBtCQm4H5UPSXpOAltKEz+xRn2G+T3vlvRNW+JheWCPa0D8PEXSxzo/bfPOoxP0UZqEAAQCEkD8BIRJVYsI3CjpSU7JFH2yNPETahRiW5L7lDiUmis1t6PaeXWHNSDy5nLhfggUS2DKC65Y5zC8GAKp839KEj8hd3MeEz9ztmdoRfyEEpvFPJAYCoHaCSB+ao9wOf65H9I5H+AQHpYkfkJ9iN3RjL5OW/F30AygoWyZ0WSSW1ta0ZYEMI1CYG0CiJ+1idPeNgLDkYibJD15BWR9u7lsurjJ5SWjPpd2q7C27cJsOUSHLOBckmhc4N5DRa6TdAJTXkvxUQ4CeRJA/OQZl1at+qCkZw+cX0OQ9B/x0EvGp8Rx0/EhU8qGuGep8LG2WxA/rUzthehL1AGBYgggfooJVVOGjgmCmH21/4jbXi5zpn1CBGVb0nGI+od1uILlAM8G+rpuk3SMZ125Fk8pjHNlgl0QKJ5AzA9K8XBwICmBe0Z2DI41MtN/4NY+amOY6D0GfNNxEruCYz6ZKDl2140eP++5/cxerC7wqCfXoq4I/0FJv5erodgFAQjMI4D4mceLu9cnMBwFipEM3X/Ef03S+Su6uC1heMzvZ0m6ekX7tjV1paTndjfU+B6x4zoO7vyL0ecyCSNmQKBNAjW+tNqMZN1eu0cL9J7eIemoAG4/U9JViT7iY4nWtonekQO/Yo14+eBzN1qs7T1ymaQXOnBq888n7pSFQBUEeKirCGMTTthOw++U5PbZEL+R29RQL6LWfB5Ok3R5FzkbbbJRp7HRHksA/3CGEa41EdgVw4bdziuzc8u4IACBigis+bKvCBuuJCTg5sn0ZrxF0ncutMn2tukTf9d8Htx27fysxxcw2uOaWKv4caci3yfp9IX9imIQgEDGBNZ82WeMAdMKI3CmpEsGNi9dEu+KqTWfh01L3O3jayunbPor56vGZe5uX8hxqjHn/oBtECiKwJov+6LAYGwRBIajQEumwXISPyV9cGsTP9dIOsXp9bwbi3gFYCQElhHgAV/GjVL5EBgejGqWzdmvJ8X0zVhuj50UbkncpVzukRgHlmL0Bju/XdJbET6FRxHzITCDAOJnBixuzZrA2DSSfaDtj+3fc+IG69cQP3Yi+F1dsvbwmVs6XZc6GDVtcOjm+dh06lmp4dI+BCAQlwDiJy5fal+XgHv21baWe1Fkic4xxM9xneCy52vXM7br5+sSnN5aLxhujbyR4nSLlt3pxt/nqI9lrVMKAhBIQqDUF28SWDRaDAGb9lqygss+6PYx3D/T0xu6A1jnPk+W1GzTXSVeNYifWyQ9oYO/JF+sxLhhMwQgMOG3UiBBoAYCdl7XO5zTzeeIFDe3pT/3y0YILM9lSj1W/gpJtq/P8ZKur+Rj23P5lCMgSuorF0p6lWPw4Xt/v7skB7AVAhBYTmDKy3t57ZSEQN4EjuiSjEM9B/102pMl3TziujvFcqike/PGs9W60kd+3Dyf1w2EUMFhwXQIQGAKgVAv/SltcQ8EciQwtmT7CyTZKrJdOTu92LGEZjsLatv1b5KeU8moj7lRsvhxRWjNJ9Ln+LxhEwSyIID4ySIMGJGQwJz9aiyXaF835WUf0DnXtkNM59STy72lip979k6gf2xFIjSX/oAdECiKAOKnqHBhbAQCc8TP0ubdoyxKXdo+9L3EnJ+LJb3McYT339IeTTkIFE6Ah7/wAGK+N4E1xE9toz7utFcpCc+2/cBNTm/5Hklv8u49VAABCBRJAPFTZNgwOiCB2OLHzS/5d0nPCGh7yqpKm/ZyBei1kp6WEh5tQwACaQkgftLyp/X0BGKKnwsknde5WNs+MiVNe9nWBP02BbVMO6Z/crAAAgUTQPwUHDxMD0Igxg7PvWEx6w7ivEclpYz82B5Lpzp+8s7zCDpFIVALAV4EtUQSP5YSiCVQLpP0ws6oGkcbShE/NeZbLe3rlIMABDoCiB+6QusEPtctXzcOIZ+HWKIql3iVMO3lCp+/kfR1ucDDDghAIC2BkC/7tJ7QOgSWEfikczBnqOfhLZK+o+JRH3Mtd/Hjilo78PbgZd2DUhCAQI0EQr3sa2SDT+0Q6D/kH99b/vzUAG7XPuqTu/ixOJ7kxJH3XIBOTRUQqIkAL4WaookvSwn04idEbs73SvqjzpDaVni5fHMd+XmFpIscQ+2oEhvd44IABCDweQKIHzoDBB6ewgkhVloY9cl55MfN83mjpB+gg0MAAhAYEkD80CcgEE78nL6XVPtPDYz65Cp+XOH5aUlH0LkhAAEIjBFA/NAvICCFGq1x6zlR0vUVw81t2suO2Ti6EeFZcbfCNQisQwDxsw5nWsmbQAjxc4Kk6xr6+OYkfi6U9Cqni/Fey/t5wzoIJCfASyJ5CDAgAwIh9vpxBdQZkt6bgV8xTchF/Bwuyaa4+uvHJb0hpuPUDQEIlE8A8VN+DPHAn4DtA3NgV83SZyLmGWH+HoavIRfx44rOT0h6SnhXqRECEKiNwNIXfW0c8KdtApYrYjkjdn2lpL+ficP9AL947yypd80sX+LtORxvcZ+zeWGIlXolxgGbIQCBBQQQPwugUaRKAv3H3KbA9s/0sLVRH8PjLin/S0lnzmTme7sdV/E1TiW8y3yJUh4CDRHghdFQsHF1K4GlAsbNF3qrpHMa4fzDkn7b8fUjkp6+ku/PlHSV09bXS/rrldqmGQhAoAICiJ8KgogLQQgsFT9LywUxOnEldmq9nV7fX7c7y81jmuaOOr1f0mkxG6NuCECgPgKIn/piikfLCCwRMe6oz5ojH8s8jFPq+MF+RrEPEX1Q0gGdK0umKONQoFYIQKAoAoifosKFsREJLNnrxx2BaPlZMt+NX3+FOCNtLNTXSDrF+UHLzCM+ClQNgfoJ8PKoP8Z4OI3AXPHjjkDYwZl2gGbrl8sw9Oqrb9ib3rrUAWx5P1e3Dhz/IQCBZQQQP8u4Uao+Aq6YmfJcMOoz3gdiCSCX99v2Ep7Prq8L4hEEILAWgSkv+bVsoR0IpCRgH9SXdgbYRnm2Yd6m67OSDup+GDvHJSWTpW27Asjq8H3PuPUZ+0OWGkY5CEAAAiFeSlCEQE0E+tGFuyXZsQmbLkZ9dkfdHUmzu+3ssxt2F3vUHTdJOq7719BTaQvMoQgEIFADAd/fyGpggA8Q6An0omZbwu6dko7oCsRK7K0lIg8MNoyc+775+b1Ro190YMwtXwtH/IAABAIT4GUSGCjVFU3AHdG5RNJZI94w6jMvxJ+RdNi8IqN3/7qk8wLUQxUQgAAEvOfiQQiBmgi8R9LXbhlp+JhzcCajPtMjf7OkJ06//VF33ra3m/QxHuUpCgEIQOARBBj5oUNA4JEE3FwVN8fk3kGiLc/OvJ7zDwt3Yjbh0+f8zGuRuyEAAQhsIMALnK4BgUcTGC7XHj4nJN7SayAAAQgUTADxU3DwMD0qATe3x20I4RMVO5VDAAIQiE8A8ROfMS2US8AVQIiecuOI5RCAAAQeQQDxQ4eAwGYCd3TL2vcBCQIQgAAE6iGA+KknlngCAQhAAAIQgMAEAv8Py19l8RVCVrEAAAAASUVORK5CYII=", // Placeholder for signature image
        certificationSignerName: "John Doe",
        certificationDateTime: "2026-02-03T18:45:00.000Z",

        // Step 10: Property Units
        numberOfUnits: "1"
      });
    }
  }, [isReadOnly]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [step9Files, setStep9Files] = useState<Step9Files>({});
  const [step9Errors, setStep9Errors] = useState<Record<number, string>>({});
  const [applicationId, setApplicationId] = useState<number | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");

  




  const getCurrentDateTime = () => {
    return new Date().toISOString();
  };

  const formatDateTime = (iso: string) => {
    return new Date(iso).toLocaleString();
  };

  useEffect(() => {
    if (activeStep !== 9) return;

    const interval = setInterval(() => {
      setFormData((prev) => ({
        ...prev,
        certificationDateTime: new Date().toISOString(),
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [activeStep]);

const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {

    if (isReadOnly) return;

    const { name, value } = e.target;

    if (!name) return; // 🔒 production safety

    setFormData((prev) => ({
      ...prev,
      [name as keyof ApplicantFormData]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name as keyof FormErrors]: "",
    }));
  };

const handleNext = () => {
  let newErrors: FormErrors = {};

  if (!formData.applicantName?.trim()) {
    newErrors.applicantName = "Applicant name is required";
  }

  if (!formData.applicantProperty?.trim()) {
    newErrors.applicantProperty = "Property address is required";
  }

  if (!formData.country?.trim()) {
    newErrors.country = "Country is required";
  }

  if (!formData.state?.trim()) {
    newErrors.state = "State is required";
  }

  if (!formData.city?.trim()) {
    newErrors.city = "City is required";
  }

  if (!formData.email?.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    newErrors.email = "Enter a valid email address";
  }

  if (!formData.phoneCell?.trim()) {
    newErrors.phoneCell = "Cell phone is required";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    setActiveStep(2);
  }
};


  const handleSave = async () => {
    let newErrors: FormErrors = {};

    // ✅ REQUIRED LOGIC — DO NOT REMOVE
    if (!formData.applicantName.trim()) {
      newErrors.applicantName = "Please enter applicant name to save";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      const payload = {
        applicationId, // null for first save
        activeStep,

       // Step 1
applicant_name: formData.applicantName,
applicant_property: formData.applicantProperty,
country: formData.country,
state: formData.state,
city: formData.city,
address: formData.address,
email: formData.email,
phone_cell: formData.phoneCell,
phone_work: formData.phoneWork,
phone_home: formData.phoneHome,


        // Step 2
        household_members: formData.householdMembers,

        // Step 3
        reside_address: formData.resideAddress,
        property_owned_duration: formData.propertyOwnedDuration,
        taxes_paid: formData.taxesPaid,

        // Step 4
        applicant_employer_name: formData.applicantEmployerName,
        applicant_employer_address: formData.applicantEmployerAddress,
        coapplicant_employer_name: formData.coApplicantEmployerName,
        coapplicant_employer_address: formData.coApplicantEmployerAddress,

        // Step 5
        renovation_details: formData.renovationDetails,
        maintenance_heating_cooling: formData.maintenanceHeatingCooling,
        maintenance_plumbing: formData.maintenancePlumbing,
        maintenance_electrical: formData.maintenanceElectrical,
        maintenance_appliances: formData.maintenanceAppliances,
        maintenance_doors_windows: formData.maintenanceDoorsWindows,
        maintenance_flooring_walls: formData.maintenanceFlooringWalls,
        maintenance_pest: formData.maintenancePest,
        maintenance_safety: formData.maintenanceSafety,
        maintenance_other_text: formData.maintenanceOtherText,

        // Step 6
        gross_annual_income: formData.grossAnnualIncome,

        // Step 7
        total_persons: formData.totalPersons,
        children_under_18: formData.childrenUnder18,

        // Step 8
        has_mortgage: formData.hasMortgage,
        mortgage_amount: formData.mortgageAmount,
        mortgage_balance: formData.mortgageBalance,
        payment_status: formData.paymentStatus,
        mortgagee: formData.mortgagee,
        monthly_liabilities: formData.monthlyLiabilities,

        // Step 9
        certification_signer_name: formData.certificationSignerName,
        certification_signature: formData.certificationSignature,
        certification_datetime: formData.certificationDateTime,
      };

      const res = await saveHomeImprovementApplication(payload);

      // 🔑 STORE applicationId after first save
      if (!applicationId) {
        setApplicationId(res.data.data.applicationId);
      }

      alert("Draft saved successfully ✅");
    } catch (err) {
      console.error(err);
      alert("Failed to save draft ❌");
    }
  };

  const handleToggle = (name: keyof ApplicantFormData) => {
  if (isReadOnly) return; // 🛑 Guard
  setFormData(prev => ({
    ...prev,
    [name]: !prev[name]
  }));
};

  useEffect(() => {
    const url = new URL(window.location.href);
    const id = url.pathname.split("/").pop();

    if (!id || isNaN(Number(id))) return;

    const fetchDraft = async () => {
      try {
        const res = await getHomeImprovementApplicationById(Number(id));
        const data = res.data.data;

        setApplicationId(data.id);
        setActiveStep(data.active_step || 1);

        setFormData((prev) => ({
          ...prev,
          applicantName: data.applicant_name || "",
          applicantProperty: data.applicant_property || "",
          address: data.reside_address || "",
          email: data.email || "",
          phoneCell: data.phone_cell || "",
          phoneWork: data.phone_work || "",
          phoneHome: data.phone_home || "",

          householdMembers: data.household_members || [{ name: "", age: 0 }],
          monthlyLiabilities: data.monthly_liabilities || [
            { payee: "", amount: "" },
          ],

          renovationDetails: data.renovation_details || "",
          grossAnnualIncome: data.gross_annual_income || "",
        }));
      } catch (err) {
        console.error("Failed to load application", err);
      }
    };

    fetchDraft();
  }, []);

  const handleNextStep2 = () => {
    let newErrors: FormErrors = {};

    if (!formData.householdMembers.length) {
      newErrors.householdMembers = "At least one household member is required";
    } else {
      const invalid = formData.householdMembers.some(
        (m) => !m.name.trim() || m.age <= 0,
      );

      if (invalid) {
        newErrors.householdMembers =
          "Each household member must have a name and age greater than 0";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(3);
    }
  };

  const handleHouseholdChange = (
    index: number,
    field: keyof HouseholdMember,
    value: string,
  ) => {
    const updated = [...formData.householdMembers];
    updated[index] = {
      ...updated[index],
      [field]: field === "age" ? Number(value) : value,
    };

    setFormData((prev) => ({
      ...prev,
      householdMembers: updated,
    }));

    setErrors((prev) => ({ ...prev, householdMembers: "" }));
  };

  const addHouseholdMember = () => {
    setFormData((prev) => ({
      ...prev,
      householdMembers: [...prev.householdMembers, { name: "", age: 0 }],
    }));
  };

  const removeHouseholdMember = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      householdMembers: prev.householdMembers.filter((_, i) => i !== index),
    }));
  };

  const handleNextStep3 = () => {
    let newErrors: FormErrors = {};

    if (!formData.resideAddress) {
      newErrors.resideAddress = "Please select yes or no";
    }

    if (!formData.propertyOwnedDuration.trim()) {
      newErrors.propertyOwnedDuration =
        "Please enter how long you have owned the property";
    }

    if (!formData.taxesPaid) {
      newErrors.taxesPaid = "Please select yes or no";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(4);
    }
  };

  const handleNextStep4 = () => {
    let newErrors: FormErrors = {};

    if (!formData.applicantEmployerName.trim()) {
      newErrors.applicantEmployerName = "Employer name is required";
    }

    if (!formData.applicantEmployerAddress.trim()) {
      newErrors.applicantEmployerAddress = "Employer address is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(5); // move to Document Upload
    }
  };

  const handleNextStep5 = () => {
    let newErrors: FormErrors = {};

    if (!formData.renovationDetails.trim()) {
      newErrors.renovationDetails = "Renovation details are required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(6);
    }

    const anyChecked = MAINTENANCE_KEYS.some((key) => formData[key]);
  };

  const MAINTENANCE_KEYS = [
    "maintenanceHeatingCooling",
    "maintenancePlumbing",
    "maintenanceElectrical",
    "maintenanceAppliances",
    "maintenanceDoorsWindows",
    "maintenanceFlooringWalls",
    "maintenancePest",
    "maintenanceSafety",
  ] as const;

  



  const isAllChecked = MAINTENANCE_KEYS.every((key) => formData[key]);

  const handleCheckAll = (checked: boolean) => {
    setFormData((prev) => {
      const updated = { ...prev };
      MAINTENANCE_KEYS.forEach((key) => {
        updated[key] = checked;
      });
      return updated;
    });
  };

  const handleNextStep6 = () => {
    let newErrors: FormErrors = {};

    if (!formData.grossAnnualIncome) {
      newErrors.grossAnnualIncome = "Gross annual income is required";
    } else if (Number(formData.grossAnnualIncome) <= 0) {
      newErrors.grossAnnualIncome = "Income must be greater than 0";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(7); // move to next step
    }
  };

  const handleNextStep7 = () => {
    let newErrors: FormErrors = {};

    if (!formData.totalPersons) {
      newErrors.totalPersons = "Total persons is required";
    } else if (Number(formData.totalPersons) <= 0) {
      newErrors.totalPersons = "Must be greater than 0";
    }

    if (!formData.childrenUnder18) {
      newErrors.childrenUnder18 = "Number of children is required";
    } else if (Number(formData.childrenUnder18) < 0) {
      newErrors.childrenUnder18 = "Cannot be negative";
    } else if (
      Number(formData.childrenUnder18) > Number(formData.totalPersons)
    ) {
      newErrors.childrenUnder18 = "Children count cannot exceed total persons";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(8);
    }
  };

  const handleNextStep8 = () => {
    let newErrors: FormErrors = {};

    // Mortgage yes / no
    if (!formData.hasMortgage) {
      newErrors.hasMortgage = "Please select yes or no";
    }

    // Mortgage details
    if (formData.hasMortgage === "yes") {
      if (!formData.mortgageAmount) {
        newErrors.mortgageAmount = "Mortgage payment amount required";
      }

      if (!formData.mortgageBalance) {
        newErrors.mortgageBalance = "Mortgage balance required";
      }

      if (!formData.paymentStatus.trim()) {
        newErrors.paymentStatus = "Payment status required";
      }

      if (!formData.mortgagee.trim()) {
        newErrors.mortgagee = "Mortgagee is required";
      }
    }

    // ✅ Monthly liabilities validation (FIXED)
    const liabilityErrors = formData.monthlyLiabilities.map((item) => {
      const err: { payee?: string; amount?: string } = {};

      if (!item.payee.trim()) {
        err.payee = "Payee is required";
      }

      if (!item.amount) {
        err.amount = "Amount is required";
      }

      return err;
    });

    // Check if any liability has error
    const hasLiabilityErrors = liabilityErrors.some(
      (err) => err.payee || err.amount,
    );

    if (hasLiabilityErrors) {
      newErrors.monthlyLiabilities = liabilityErrors;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setActiveStep(9);
    }
  };

  const handleNextStep9 = () => {
    let newErrors: FormErrors = {};

    if (!formData.certificationSignerName.trim()) {
      newErrors.certificationSignerName = "Legal name is required";
    }

    if (!formData.certificationSignature) {
      newErrors.certificationSignature = "Signature is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // freeze final timestamp
      setFormData((prev) => ({
        ...prev,
        certificationDateTime: getCurrentDateTime(),
      }));

      setActiveStep(10);
    }
  };

  // ===== STEP 10 DOCUMENT LIST =====
  const DOCUMENT_LIST = [
    { label: "Copy of deed to home", required: true },

    { label: "Paid tax receipts (city, school and county)", required: true },

    { label: "Homeowner's insurance policy", required: true },

    { label: "Federal and state tax returns", required: true },

    { label: "Bank statements (last 3 months)", required: true },

    { label: "Pay stubs (last four pay periods)", required: true },

    {
      label: "Employment verification letter (sent directly by employer)",
      required: false,
      uploadDisabled: true,
    },

    // ❌ Benefits verification REMOVED
    // ❌ Land ownership verification REMOVED

    {
      label: "Certificate of Deposit verification",
      required: false, // optional if applicant doesn't have
    },

    {
      label: "Annuity / insurance income verification",
      required: false, // optional if applicant doesn't have
    },

    {
      label: "Liability verification (must match listed payees)",
      required: true,
      isLiability: true,
    },

    {
      label: "Proof of residency (utility bill, internet bill, etc.)",
      required: true,
    },

    {
      label: "Tenant residency affidavit (required only for 2-unit homes)",
      required: false,
      requiresTwoUnit: true,
    },
  ];

  // "Benefits verification",

  // ===== TYPES =====
  type Step9Files = {
    [key: number]: File | null;
  };

  // FILE CHANGE
  const handleStep9FileChange = (index: number, file: File | null) => {
    setStep9Files((prev) => ({
      ...prev,
      [index]: file,
    }));

    setStep9Errors((prev) => {
      const copy = { ...prev };
      delete copy[index];
      return copy;
    });
  };

  // REMOVE FILE
  const removeStep9File = (index: number) => {
    setStep9Files((prev) => ({
      ...prev,
      [index]: null,
    }));
  };

  // SUBMIT STEP 10
  const handleSubmitStep10 = () => {
    let errors: Record<number, string> = {};

    DOCUMENT_LIST.forEach((doc, index) => {
      // Skip documents that are NOT required
      if (!doc.required) return;

      // Skip upload-disabled documents
      if (doc.uploadDisabled) return;

      // Skip 2-unit-only docs if home is not 2-unit
      if (doc.requiresTwoUnit && formData.numberOfUnits !== "2") return;

      // Validate required uploads
      if (!step9Files[index]) {
        errors[index] = "This document is required";
      }
    });

    setStep9Errors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("✅ ALL DOCUMENTS UPLOADED", step9Files);
      alert("Documents submitted successfully!");
      // final submission logic here
    }
  };
  const countryOptions = [
  { label: "India", value: "India" },
  { label: "United States", value: "United States" },
  { label: "United Kingdom", value: "United Kingdom" },
  { label: "Canada", value: "Canada" },
  { label: "Australia", value: "Australia" },
];


const cityOptions: CityMap = {
  Maharashtra: [
    { label: "Mumbai", value: "Mumbai" },
    { label: "Pune", value: "Pune" },
    { label: "Nagpur", value: "Nagpur" },
    { label: "Nashik", value: "Nashik" },
  ],
  Gujarat: [
    { label: "Ahmedabad", value: "Ahmedabad" },
    { label: "Surat", value: "Surat" },
    { label: "Vadodara", value: "Vadodara" },
    { label: "Rajkot", value: "Rajkot" },
  ],
  California: [
    { label: "Los Angeles", value: "Los Angeles" },
    { label: "San Francisco", value: "San Francisco" },
    { label: "San Diego", value: "San Diego" },
  ],
  Texas: [
    { label: "Houston", value: "Houston" },
    { label: "Austin", value: "Austin" },
    { label: "Dallas", value: "Dallas" },
  ],
};


  const steps = [
    {
      id: 1,title: "Applicant Information",subtitle: "Lorem Ipsum is simply",},
    { id: 2,      title: "Household Information",      subtitle: "Lorem Ipsum is simply",
    },
    { id: 3, title: "Property Status", subtitle: "Lorem Ipsum is simply" },
    { id: 4, title: "Current Employment", subtitle: "Lorem Ipsum is simply" },
    { id: 5, title: "Renovation Details", subtitle: "Lorem Ipsum is simply" },
    { id: 6, title: "Income Summary", subtitle: "Lorem Ipsum is simply" },
    { id: 7, title: "Household Counts", subtitle: "Lorem Ipsum is simply" },
    { id: 8, title: "Liabilities", subtitle: "Lorem Ipsum is simply" },
    { id: 9, title: "Certifications", subtitle: "Lorem Ipsum is simply" },
    { id: 10, title: "Documents", subtitle: "Lorem Ipsum is simply" },
  ];

  return (
    <>
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-6 md:py-10 px-5 lg:px-20 rounded-lg overflow-hidden mt-5"
        style={{
          backgroundImage: "url('about/about-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <nav className="inline-flex items-center gap-4 px-8 py-2 rounded-full bg-teal-transperent backdrop-blur-sm mb-6">
                <Link
                  href="/"
                  className="text-[15px] md:text-[17px] text-white font-medium hover:underline"
                >
                  Home
                </Link>
                <span className="text-white text-2xl leading-none">›</span>

                <Link
                  href="/home-improvement-program"
                  className="text-[15px] md:text-[17px] text-white font-medium hover:underline"
                >
                  Home Improvement Program
                </Link>

                <span className="text-white text-2xl leading-none">›</span>
                <span className="text-[15px] md:text-[17px] text-white font-medium">
                  Application form
                </span>
              </nav>

              <h1 className="text-[20px] lg:text-[35px] font-semibold text-white leading-tight md:leading-snug">
                <span className="inline-flex items-center gap-3 relative pr-[25px]">
                  Home Improvement Program
                  <Image
                    src="/icons/top-arrow.svg"
                    alt="Top Arrow"
                    width={36}
                    height={36}
                    className="absolute right-[0px]  md:right-[-25px] lg:right-[-50px]  top-[-15px]"
                  />
                </span>
                <br />
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Stepper Form Section */}
      <section className="my-10 max-w-7xl mx-auto  ">
        <div className="bg-white rounded-xl shadow-sm border mb-8 px-4 py-4">
          <PaginationStepper steps={steps} activeStep={activeStep} />
        </div>

        {/* Form */}
        {activeStep === 1 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Applicant Name */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Applicant’s Name(s)<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Applicant Name"
          name="applicantName"
          value={formData.applicantName}
          onChange={handleChange}
          disabled={isReadOnly} // 🔒 Lock input
          className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
            isReadOnly
              ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
              : "focus:ring-1 focus:ring-teal-500 border-gray-300"
          } ${errors.applicantName ? "border-red-500" : ""}`}
        />
        {errors.applicantName && (
          <p className="text-red-500 text-xs mt-1">{errors.applicantName}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          E-Mail Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isReadOnly} // 🔒 Lock input
          className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
            isReadOnly
              ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
              : "focus:ring-1 focus:ring-teal-500 border-gray-300"
          } ${errors.email ? "border-red-500" : ""}`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Property Address */}
<div>
  <label className="text-sm font-medium text-gray-700 mb-1 block">
    Country <span className="text-red-500">*</span>
  </label>

<Controller
  name="country"
  control={control}
  render={({ field }) => (
    <Select
      options={countryOptions}
      placeholder="Select country"
      value={field.value}
      onChange={(val) => {
        field.onChange(val);                     // RHF
        setSelectedCountry(String(val || ""));   // local filter
        setSelectedState("");                    // reset state
        setFormData((prev) => ({                 // ✅ update formData
          ...prev,
          country: String(val || ""),
          state: "",
          city: "",
        }));
      }}
      disabled={isReadOnly}
      className={`w-full h-[45px] ${
        isReadOnly
          ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
          : ""
      } ${errors.country ? "border-red-500" : ""}`}
      error={!!errors.country}
      errorMessage={errors.country}
    />
  )}
/>


 
</div>



  {/* Property Address */}
{/* State */}
<div>
  <label className="text-sm font-medium text-gray-700 mb-1 block">
    State <span className="text-red-500">*</span>
  </label>

<Controller
  name="state"
  control={control}
  render={({ field }) => (
    <Select
      options={stateOptions[selectedCountry as CountryKey] || []}
      placeholder="Select State"
      value={field.value}
      onChange={(val) => {
        field.onChange(val);
        setSelectedState(String(val || ""));
        setFormData((prev) => ({
          ...prev,
          state: String(val || ""),
          city: "",
        }));
      }}
      disabled={!selectedCountry || isReadOnly}
      className={`w-full h-[45px] ${
        isReadOnly || !selectedCountry
          ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
          : ""
      } ${errors.state ? "border-red-500" : ""}`}
      error={!!errors.state}
      errorMessage={errors.state}
    />
  )}
/>


  
</div>


{/* City */}
<div>
  <label className="text-sm font-medium text-gray-700 mb-1 block">
    City <span className="text-red-500">*</span>
  </label>

  <Controller
    name="city"
    control={control}
    render={({ field }) => (
      <Select
        options={cityOptions[selectedState] || []}
        placeholder="Select City"
        value={field.value}
        onChange={(val) => {
        field.onChange(val);
        setFormData((prev) => ({
          ...prev,
          city: String(val || ""),
        }));
      }}
        disabled={!selectedState || isReadOnly}
        className={`w-full h-[45px] ${
          isReadOnly || !selectedState
            ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
            : ""
        } ${errors.city ? "border-red-500" : ""}`}
        error={!!errors.city}
        errorMessage={errors.city}
      />
    )}
  />

 
</div>






      {/* Area */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Area <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Area"
          name="applicantProperty"
          value={formData.applicantProperty}
          onChange={handleChange}
          disabled={isReadOnly} // 🔒 Lock input
          className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
            isReadOnly
              ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
              : "focus:ring-1 focus:ring-teal-500 border-gray-300"
          } ${errors.applicantProperty ? "border-red-500" : ""}`}
        />
        {errors.applicantProperty && (
          <p className="text-red-500 text-xs mt-1">{errors.applicantProperty}</p>
        )}
      </div>

      

      {/* Phone Cell */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Phone # (Cell) <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          inputMode="numeric"
          placeholder="Phone number (Cell)"
          name="phoneCell"
          value={formData.phoneCell}
          onChange={handleChange}
          disabled={isReadOnly} // 🔒 Lock input
          className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
            isReadOnly
              ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
              : "focus:ring-1 focus:ring-teal-500 border-gray-300"
          } ${errors.phoneCell ? "border-red-500" : ""}`}
        />
        {errors.phoneCell && (
          <p className="text-red-500 text-xs mt-1">{errors.phoneCell}</p>
        )}
      </div>

      {/* Phone Work */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Phone # (Work)
        </label>
        <input
          type="number"
          inputMode="numeric"
          placeholder="Phone number (Work)"
          name="phoneWork"
          value={formData.phoneWork}
          onChange={handleChange}
          disabled={isReadOnly} // 🔒 Lock input
          className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
            isReadOnly
              ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
              : "focus:ring-1 focus:ring-teal-500 border-gray-300"
          }`}
        />
      </div>

      {/* Phone Home */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Phone # (Home)
        </label>
        <input
          type="number"
          inputMode="numeric"
          placeholder="Phone number (Home)"
          name="phoneHome"
          value={formData.phoneHome}
          onChange={handleChange}
          disabled={isReadOnly} // 🔒 Lock input
          className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
            isReadOnly
              ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
              : "focus:ring-1 focus:ring-teal-500 border-gray-300"
          }`}
        />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-4 mt-8">
      {/* 🛑 Only show Save button if NOT in read-only mode */}
      {!isReadOnly && (
        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Save
        </button>
      )}

      <button
        onClick={handleNext}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
      >
        Next
      </button>
    </div>
  </div>
)}

        {activeStep === 2 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
    <div className="space-y-6">
      {formData.householdMembers.map((member, index) => (
        <div key={index} className="grid grid-cols-12 gap-4 items-end">
          {/* Name */}
          <div className="col-span-12 md:col-span-6">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Name of Household Member
            </label>
            <input
              type="text"
              placeholder="Name"
              value={member.name}
              onChange={(e) =>
                handleHouseholdChange(index, "name", e.target.value)
              }
              disabled={isReadOnly} // 🔒 Lock input
              className={`w-full h-[45px] border rounded-md px-4 outline-none transition-colors ${
                isReadOnly
                  ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
                  : "focus:ring-1 focus:ring-teal-500 border-gray-300"
              }`}
            />
          </div>

          {/* Age */}
          <div className="col-span-8 md:col-span-3">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Age
            </label>
            <input
              type="number"
              min="1"
              placeholder="Age"
              value={member.age === 0 ? "" : member.age}
              onChange={(e) =>
                handleHouseholdChange(index, "age", e.target.value)
              }
              disabled={isReadOnly} // 🔒 Lock input
              className={`w-full h-[45px] border rounded-md px-4 outline-none transition-colors ${
                isReadOnly
                  ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
                  : "focus:ring-1 focus:ring-teal-500 border-gray-300"
              }`}
            />
          </div>

          {/* Remove Button - Hide in Read Only Mode */}
          {!isReadOnly && (
            <div className="col-span-4 md:col-span-3">
              {formData.householdMembers.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeHouseholdMember(index)}
                  className="h-[45px] w-full border border-red-500 text-red-600 rounded-md hover:bg-red-50"
                >
                  Remove
                </button>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Error */}
      {errors.householdMembers && (
        <p className="text-red-500 text-sm">{errors.householdMembers}</p>
      )}

      {/* Add More Button - Hide in Read Only Mode */}
      {!isReadOnly && (
        <button
          type="button"
          onClick={addHouseholdMember}
          className="text-teal-600 text-sm font-medium hover:underline"
        >
          + Add Additional Household Member
        </button>
      )}
    </div>

    {/* Footer Buttons */}
    <div className="flex justify-end gap-4 mt-8">
      <button
        onClick={() => setActiveStep(1)}
        className="px-6 py-2 border rounded-md hover:bg-gray-50"
      >
        Back
      </button>

      {/* 🛑 Hide Save in Read Only */}
      {!isReadOnly && (
        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2 bg-teal-800 text-white rounded-md hover:bg-teal-600"
        >
          Save
        </button>
      )}

      <button
        onClick={handleNextStep2}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
      >
        Next
      </button>
    </div>
  </div>
)}

{activeStep === 3 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6">
    {/* Do you currently reside at this address? */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-2 block">
        Do you currently reside at this address?
      </label>
      <div className={`flex gap-6 ${isReadOnly ? "pointer-events-none" : ""}`}>
        <Radio
          id="resideYes"
          name="resideAddress"
          value="yes"
          checked={formData.resideAddress === "yes"} // Matches lowercase dummy data
          onChange={(val) =>
            !isReadOnly && setFormData((p) => ({ ...p, resideAddress: val }))
          }
          disabled={isReadOnly}
          label="Yes"
        />
        <Radio
          id="resideNo"
          name="resideAddress"
          value="no"
          checked={formData.resideAddress === "no"} // Matches lowercase dummy data
          onChange={(val) =>
            !isReadOnly && setFormData((p) => ({ ...p, resideAddress: val }))
          }
          disabled={isReadOnly}
          label="No"
        />
      </div>
      {errors.resideAddress && (
        <p className="text-red-500 text-xs mt-1">
          {errors.resideAddress}
        </p>
      )}
    </div>

    {/* How long have you owned the property? */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-1 block">
        How long have you owned the property?
      </label>
      <input
        type="text"
        placeholder="Enter duration (e.g., 5 years)"
        name="propertyOwnedDuration"
        value={formData.propertyOwnedDuration}
        onChange={(e) =>
          !isReadOnly && setFormData((p) => ({
            ...p,
            propertyOwnedDuration: e.target.value,
          }))
        }
        disabled={isReadOnly}
        className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
          isReadOnly
            ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
            : errors.propertyOwnedDuration
            ? "border-red-500 focus:ring-1 focus:ring-red-500"
            : "focus:ring-1 focus:ring-teal-500 border-gray-300"
        }`}
      />
      {errors.propertyOwnedDuration && (
        <p className="text-red-500 text-xs mt-1">
          {errors.propertyOwnedDuration}
        </p>
      )}
    </div>

    {/* Are Town/County/School Taxes Paid to Date? */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-2 block">
        Are Town/County/School Taxes Paid to Date?
      </label>
      <div className={`flex gap-6 ${isReadOnly ? "pointer-events-none" : ""}`}>
        <Radio
          id="taxesYes"
          name="taxesPaid"
          value="yes"
          checked={formData.taxesPaid === "yes"} // Matches lowercase dummy data
          onChange={(val) =>
            !isReadOnly && setFormData((p) => ({ ...p, taxesPaid: val }))
          }
          disabled={isReadOnly}
          label="Yes"
        />
        <Radio
          id="taxesNo"
          name="taxesPaid"
          value="no"
          checked={formData.taxesPaid === "no"} // Matches lowercase dummy data
          onChange={(val) =>
            !isReadOnly && setFormData((p) => ({ ...p, taxesPaid: val }))
          }
          disabled={isReadOnly}
          label="No"
        />
      </div>
      {errors.taxesPaid && (
        <p className="text-red-500 text-xs mt-1">{errors.taxesPaid}</p>
      )}
    </div>

    {/* Navigation Buttons */}
    <div className="flex justify-end gap-4 mt-6">
      <button
        onClick={() => setActiveStep(2)}
        className="px-6 py-2 border rounded-md hover:bg-gray-50 transition-colors"
      >
        Back
      </button>

      {/* Save button hidden in Read-Only Mode */}
      {!isReadOnly && (
        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Save
        </button>
      )}

      <button
        onClick={handleNextStep3}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
      >
        Next
      </button>
    </div>
  </div>
)}

        {activeStep === 4 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Employer Name (Applicant) */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Employer Name (Applicant){" "}
          <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter employer name"
          name="applicantEmployerName"
          value={formData.applicantEmployerName}
          onChange={handleChange}
          disabled={isReadOnly} // 🔒 Lock input
          className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
            isReadOnly
              ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
              : "focus:ring-1 focus:ring-teal-500 border-gray-300"
          } ${errors.applicantEmployerName ? "border-red-500" : ""}`}
        />
        {errors.applicantEmployerName && (
          <p className="text-red-500 text-xs mt-1">
            {errors.applicantEmployerName}
          </p>
        )}
      </div>

      {/* Employer Address (Applicant) */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Employer Address (Applicant){" "}
          <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter employer address"
          name="applicantEmployerAddress"
          value={formData.applicantEmployerAddress}
          onChange={handleChange}
          disabled={isReadOnly} // 🔒 Lock input
          className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
            isReadOnly
              ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
              : "focus:ring-1 focus:ring-teal-500 border-gray-300"
          } ${errors.applicantEmployerAddress ? "border-red-500" : ""}`}
        />
        {errors.applicantEmployerAddress && (
          <p className="text-red-500 text-xs mt-1">
            {errors.applicantEmployerAddress}
          </p>
        )}
      </div>

      {/* Employer Name (Co-Applicant) */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Employer Name (Co-Applicant)
        </label>
        <input
          type="text"
          placeholder="Enter employer name"
          name="coApplicantEmployerName"
          value={formData.coApplicantEmployerName}
          onChange={handleChange}
          disabled={isReadOnly} // 🔒 Lock input
          className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
            isReadOnly
              ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
              : "focus:ring-1 focus:ring-teal-500 border-gray-300"
          } ${errors.coApplicantEmployerName ? "border-red-500" : ""}`}
        />
        {errors.coApplicantEmployerName && (
          <p className="text-red-500 text-xs mt-1">
            {errors.coApplicantEmployerName}
          </p>
        )}
      </div>

      {/* Employer Address (Co-Applicant) */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Employer Address (Co-Applicant)
        </label>
        <input
          type="text"
          placeholder="Enter employer address"
          name="coApplicantEmployerAddress"
          value={formData.coApplicantEmployerAddress}
          onChange={handleChange}
          disabled={isReadOnly} // 🔒 Lock input
          className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
            isReadOnly
              ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
              : "focus:ring-1 focus:ring-teal-500 border-gray-300"
          } ${errors.coApplicantEmployerAddress ? "border-red-500" : ""}`}
        />
        {errors.coApplicantEmployerAddress && (
          <p className="text-red-500 text-xs mt-1">
            {errors.coApplicantEmployerAddress}
          </p>
        )}
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-4 mt-8">
      <button
        onClick={() => setActiveStep(3)}
        className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
      >
        Back
      </button>

      {/* 🛑 Only show Save button if NOT in read-only mode */}
      {!isReadOnly && (
        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Save
        </button>
      )}

      <button
        onClick={handleNextStep4}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
      >
        Next
      </button>
    </div>
  </div>
)}

        {activeStep === 5 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
    <div className="grid grid-cols-1 gap-6">
      {/* Renovation Improvements Requested */}
      <TextArea
        label="Renovation Improvements Requested"
        placeholder="Describe all renovation improvements you are requesting..."
        name="renovationDetails"
        rows={6}
        value={formData.renovationDetails}
        onChange={handleChange}
        disabled={isReadOnly} // 🔒 Lock TextArea
        error={!!errors.renovationDetails}
        errorMessage={errors.renovationDetails}
        className={`resize-none ${isReadOnly ? "bg-gray-100 cursor-not-allowed" : ""}`}
      />

      {/* Renovation Issue Selection */}
      <div className="space-y-4">
        {/* CHECK ALL */}
        <div className={isReadOnly ? "pointer-events-none opacity-70" : ""}>
          <Checkbox
            name="checkAllMaintenance"
            label="Check All"
            checked={isAllChecked}
            onChange={handleCheckAll}
            disabled={isReadOnly} // 🔒 Lock Check All
          />
        </div>

        {/* CHECKBOX GRID */}
        <div className={`grid grid-cols-1 gap-4 ${isReadOnly ? "pointer-events-none" : ""}`}>
          {/* Heating / Cooling */}
          <div className="space-y-2">
            <Checkbox
              name="Heating / Cooling"
              label="Heating / Cooling"
              checked={formData.maintenanceHeatingCooling}
              onChange={(val) => !isReadOnly && setFormData((p) => ({ ...p, maintenanceHeatingCooling: val }))}
              disabled={isReadOnly}
            />
            {formData.maintenanceHeatingCooling && (
              <Input
                name="maintenanceHeatingCoolingText"
                placeholder="Describe Heating / Cooling work"
                value={formData.maintenanceHeatingCoolingText}
                onChange={handleChange}
                disabled={isReadOnly}
                className={isReadOnly ? "bg-gray-50" : ""}
              />
            )}
          </div>

          {/* Plumbing */}
          <div className="space-y-2">
            <Checkbox
              name="Plumbing"
              label="Plumbing"
              checked={formData.maintenancePlumbing}
              onChange={(val) => !isReadOnly && setFormData((p) => ({ ...p, maintenancePlumbing: val }))}
              disabled={isReadOnly}
            />
            {formData.maintenancePlumbing && (
              <Input
                name="maintenancePlumbingText"
                placeholder="Describe Plumbing work"
                value={formData.maintenancePlumbingText}
                onChange={handleChange}
                disabled={isReadOnly}
                className={isReadOnly ? "bg-gray-50" : ""}
              />
            )}
          </div>

          {/* Electrical */}
          <div className="space-y-2">
            <Checkbox
              name="Electrical"
              label="Electrical"
              checked={formData.maintenanceElectrical}
              onChange={(val) => !isReadOnly && setFormData((p) => ({ ...p, maintenanceElectrical: val }))}
              disabled={isReadOnly}
            />
            {formData.maintenanceElectrical && (
              <Input
                name="maintenanceElectricalText"
                placeholder="Describe Electrical work"
                value={formData.maintenanceElectricalText}
                onChange={handleChange}
                disabled={isReadOnly}
                className={isReadOnly ? "bg-gray-50" : ""}
              />
            )}
          </div>

          {/* Appliances */}
          <div className="space-y-2">
            <Checkbox
              name="Appliances"
              label="Appliances"
              checked={formData.maintenanceAppliances}
              onChange={(val) => !isReadOnly && setFormData((p) => ({ ...p, maintenanceAppliances: val }))}
              disabled={isReadOnly}
            />
            {formData.maintenanceAppliances && (
              <Input
                name="maintenanceAppliancesText"
                placeholder="Describe Appliances work"
                value={formData.maintenanceAppliancesText}
                onChange={handleChange}
                disabled={isReadOnly}
                className={isReadOnly ? "bg-gray-50" : ""}
              />
            )}
          </div>

          {/* Doors / Windows */}
          <div className="space-y-2">
            <Checkbox
              name="Doors"
              label="Doors / Windows"
              checked={formData.maintenanceDoorsWindows}
              onChange={(val) => !isReadOnly && setFormData((p) => ({ ...p, maintenanceDoorsWindows: val }))}
              disabled={isReadOnly}
            />
            {formData.maintenanceDoorsWindows && (
              <Input
                name="maintenanceDoorsWindowsText"
                placeholder="Describe Doors work"
                value={formData.maintenanceDoorsWindowsText}
                onChange={handleChange}
                disabled={isReadOnly}
                className={isReadOnly ? "bg-gray-50" : ""}
              />
            )}
          </div>

          {/* Flooring / Walls */}
          <div className="space-y-2">
            <Checkbox
              name="Flooring"
              label="Flooring / Walls"
              checked={formData.maintenanceFlooringWalls}
              onChange={(val) => !isReadOnly && setFormData((p) => ({ ...p, maintenanceFlooringWalls: val }))}
              disabled={isReadOnly}
            />
            {formData.maintenanceFlooringWalls && (
              <Input
                name="maintenanceFlooringWallsText"
                placeholder="Describe Flooring / Walls work"
                value={formData.maintenanceFlooringWallsText}
                onChange={handleChange}
                disabled={isReadOnly}
                className={isReadOnly ? "bg-gray-50" : ""}
              />
            )}
          </div>

          {/* Pest Concerns */}
          <div className="space-y-2">
            <Checkbox
              name="Pest Concerns"
              label="Pest Concerns"
              checked={formData.maintenancePest}
              onChange={(val) => !isReadOnly && setFormData((p) => ({ ...p, maintenancePest: val }))}
              disabled={isReadOnly}
            />
            {formData.maintenancePest && (
              <Input
                name="maintenancePestText"
                placeholder="Describe Pest Concerns"
                value={formData.maintenancePestText}
                onChange={handleChange}
                disabled={isReadOnly}
                className={isReadOnly ? "bg-gray-50" : ""}
              />
            )}
          </div>

          {/* Safety Issue */}
          <div className="space-y-2">
            <Checkbox
              name="Safety Issue"
              label="Safety Issue"
              checked={formData.maintenanceSafety}
              onChange={(val) => !isReadOnly && setFormData((p) => ({ ...p, maintenanceSafety: val }))}
              disabled={isReadOnly}
            />
            {formData.maintenanceSafety && (
              <Input
                name="maintenanceSafetyText"
                placeholder="Describe Safety Issue"
                value={formData.maintenanceSafetyText}
                onChange={handleChange}
                disabled={isReadOnly}
                className={isReadOnly ? "bg-gray-50" : ""}
              />
            )}
          </div>
        </div>

        {/* OTHER TEXT */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Other (specify)
          </label>
          <input
            type="text"
            name="maintenanceOtherText"
            value={formData.maintenanceOtherText}
            onChange={handleChange}
            disabled={isReadOnly}
            placeholder="Specify other requests"
            className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
              isReadOnly
                ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
                : "focus:ring-1 focus:ring-teal-500 border-gray-300"
            }`}
          />
        </div>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-4 mt-8">
      <button
        onClick={() => setActiveStep(4)}
        className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
      >
        Back
      </button>

      {!isReadOnly && (
        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Save
        </button>
      )}

      <button
        onClick={handleNextStep5}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
      >
        Next
      </button>
    </div>
  </div>
)}

       {activeStep === 6 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Gross Annual Household Income */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Gross Annual Household Income{" "}
          <span className="text-red-500">*</span>
        </label>

        {/* Small explanatory note */}
        <p className="text-xs text-gray-500 mb-1">
          * Includes income of all residents over 18 who work and live in the home
        </p>

        <input
          type="number"
          min="0"
          inputMode="numeric"
          placeholder="Enter gross annual income"
          name="grossAnnualIncome"
          value={formData.grossAnnualIncome}
          onChange={handleChange}
          disabled={isReadOnly} // 🔒 Lock input
          className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
            isReadOnly
              ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
              : errors.grossAnnualIncome
              ? "border-red-500 focus:ring-1 focus:ring-red-500"
              : "focus:ring-1 focus:ring-teal-500 border-gray-300"
          }`}
        />
        {errors.grossAnnualIncome && (
          <p className="text-red-500 text-xs mt-1">
            {errors.grossAnnualIncome}
          </p>
        )}
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-4 mt-8">
      <button
        onClick={() => setActiveStep(5)}
        className="px-6 py-2 border rounded-md hover:bg-gray-50 transition-colors"
      >
        Back
      </button>

      {/* 🛑 Hide Save button in View Mode */}
      {!isReadOnly && (
        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Save
        </button>
      )}

      <button
        onClick={handleNextStep6}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
      >
        Next
      </button>
    </div>
  </div>
)}

        {activeStep === 7 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Total Persons */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Total Persons in Dwelling{" "}
          <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          min="1"
          name="totalPersons"
          value={formData.totalPersons}
          onChange={handleChange}
          disabled={isReadOnly} // 🔒 Lock input
          className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
            isReadOnly
              ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
              : errors.totalPersons
              ? "border-red-500 focus:ring-1 focus:ring-red-500"
              : "focus:ring-1 focus:ring-teal-500 border-gray-300"
          }`}
        />
        {errors.totalPersons && (
          <p className="text-red-500 text-xs mt-1">
            {errors.totalPersons}
          </p>
        )}
      </div>

      {/* Children Under 18 */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Number of Children Under 18{" "}
          <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          min="0"
          name="childrenUnder18"
          value={formData.childrenUnder18}
          onChange={handleChange}
          disabled={isReadOnly} // 🔒 Lock input
          className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
            isReadOnly
              ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
              : errors.childrenUnder18
              ? "border-red-500 focus:ring-1 focus:ring-red-500"
              : "focus:ring-1 focus:ring-teal-500 border-gray-300"
          }`}
        />
        {errors.childrenUnder18 && (
          <p className="text-red-500 text-xs mt-1">
            {errors.childrenUnder18}
          </p>
        )}
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-4 mt-8">
      <button
        onClick={() => setActiveStep(6)}
        className="px-6 py-2 border rounded-md hover:bg-gray-50 transition-colors"
      >
        Back
      </button>

      {/* 🛑 Only show Save button if NOT in read-only mode */}
      {!isReadOnly && (
        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Save
        </button>
      )}

      <button
        onClick={handleNextStep7}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
      >
        Next
      </button>
    </div>
  </div>
)}

        {activeStep === 8 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6">
    {/* Mortgage Payment Question */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-2 block">
        Do you have a mortgage on the property?
      </label>

      <div className={`flex gap-6 ${isReadOnly ? "pointer-events-none" : ""}`}>
        <Radio
          id="mortgageYes"
          name="hasMortgage"
          label="Yes"
          value="yes"
          checked={formData.hasMortgage === "yes"}
          onChange={(val) =>
            !isReadOnly && setFormData({ ...formData, hasMortgage: val })
          }
          disabled={isReadOnly}
        />
        <Radio
          id="mortgageNo"
          name="hasMortgage"
          label="No"
          value="no"
          checked={formData.hasMortgage === "no"}
          onChange={(val) =>
            !isReadOnly && setFormData({ ...formData, hasMortgage: val })
          }
          disabled={isReadOnly}
        />
      </div>

      {errors.hasMortgage && (
        <p className="text-red-500 text-xs mt-1">
          {errors.hasMortgage}
        </p>
      )}
    </div>

    {/* ================= MORTGAGE DETAILS (ONLY IF YES) ================= */}
    {formData.hasMortgage === "yes" && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
        {/* Mortgage Amount */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Mortgage Payment Amount <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="mortgageAmount"
            value={formData.mortgageAmount}
            onChange={handleChange}
            disabled={isReadOnly}
            className={`w-full h-[45px] border rounded-md px-4 outline-none transition-colors ${
              isReadOnly 
                ? "bg-white text-gray-600 border-gray-200 cursor-not-allowed" 
                : errors.mortgageAmount ? "border-red-500" : "focus:ring-1 focus:ring-teal-500 border-gray-300"
            }`}
          />
          {errors.mortgageAmount && (
            <p className="text-red-500 text-xs mt-1">{errors.mortgageAmount}</p>
          )}
        </div>

        {/* Mortgage Balance */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Mortgage Balance <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="mortgageBalance"
            value={formData.mortgageBalance}
            onChange={handleChange}
            disabled={isReadOnly}
            className={`w-full h-[45px] border rounded-md px-4 outline-none transition-colors ${
              isReadOnly 
                ? "bg-white text-gray-600 border-gray-200 cursor-not-allowed" 
                : errors.mortgageBalance ? "border-red-500" : "focus:ring-1 focus:ring-teal-500 border-gray-300"
            }`}
          />
          {errors.mortgageBalance && (
            <p className="text-red-500 text-xs mt-1">{errors.mortgageBalance}</p>
          )}
        </div>

        {/* Payment Status */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Payment Status <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="paymentStatus"
            value={formData.paymentStatus}
            onChange={handleChange}
            disabled={isReadOnly}
            className={`w-full h-[45px] border rounded-md px-4 outline-none transition-colors ${
              isReadOnly 
                ? "bg-white text-gray-600 border-gray-200 cursor-not-allowed" 
                : errors.paymentStatus ? "border-red-500" : "focus:ring-1 focus:ring-teal-500 border-gray-300"
            }`}
          />
          {errors.paymentStatus && (
            <p className="text-red-500 text-xs mt-1">{errors.paymentStatus}</p>
          )}
        </div>

        {/* Mortgagee */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Mortgagee <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="mortgagee"
            value={formData.mortgagee}
            onChange={handleChange}
            disabled={isReadOnly}
            className={`w-full h-[45px] border rounded-md px-4 outline-none transition-colors ${
              isReadOnly 
                ? "bg-white text-gray-600 border-gray-200 cursor-not-allowed" 
                : errors.mortgagee ? "border-red-500" : "focus:ring-1 focus:ring-teal-500 border-gray-300"
            }`}
          />
          {errors.mortgagee && (
            <p className="text-red-500 text-xs mt-1">{errors.mortgagee}</p>
          )}
        </div>
      </div>
    )}

    {/* ================= MONTHLY LIABILITIES ================= */}
    <div className="space-y-4 pt-4 border-t">
      <h3 className="text-sm font-semibold text-gray-800">Monthly Liabilities</h3>
      {formData.monthlyLiabilities.map((item, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          {/* Payee */}
          <div>
            <label className="text-xs font-medium text-gray-500 mb-1 block">Payee</label>
            <input
              type="text"
              value={item.payee}
              onChange={(e) => {
                if (isReadOnly) return;
                const updated = [...formData.monthlyLiabilities];
                updated[index].payee = e.target.value;
                setFormData({ ...formData, monthlyLiabilities: updated });
              }}
             disabled={isReadOnly}
            className={`w-full h-[45px] border rounded-md px-4 outline-none transition-colors ${
              isReadOnly 
                ? "bg-white text-gray-600 border-gray-200 cursor-not-allowed" 
                : errors.mortgageAmount ? "border-red-500" : "focus:ring-1 focus:ring-teal-500 border-gray-300"
            }`}
          />
          </div>

          {/* Amount + Remove inline */}
          <div className="flex gap-3 items-end">
            <div className="flex-1">
              <label className="text-xs font-medium text-gray-500 mb-1 block">Amount</label>
              <input
                type="number"
                value={item.amount}
                onChange={(e) => {
                  if (isReadOnly) return;
                  const updated = [...formData.monthlyLiabilities];
                  updated[index].amount = e.target.value;
                  setFormData({ ...formData, monthlyLiabilities: updated });
                }}
               disabled={isReadOnly}
            className={`w-full h-[45px] border rounded-md px-4 outline-none transition-colors ${
              isReadOnly 
                ? "bg-white text-gray-600 border-gray-200 cursor-not-allowed" 
                : errors.mortgageAmount ? "border-red-500" : "focus:ring-1 focus:ring-teal-500 border-gray-300"
            }`}
          />
            </div>

            {/* 🛑 Remove button only visible if NOT read-only */}
            {!isReadOnly && formData.monthlyLiabilities.length > 1 && (
              <button
                type="button"
                onClick={() => {
                  const updated = formData.monthlyLiabilities.filter((_, i) => i !== index);
                  setFormData({ ...formData, monthlyLiabilities: updated });
                }}
                className="h-[45px] px-4 border border-red-500 text-red-600 rounded-md hover:bg-red-50 transition-colors"
              >
                Remove
              </button>
            )}
          </div>
        </div>
      ))}

      {/* 🛑 Add button only visible if NOT read-only */}
      {!isReadOnly && (
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              monthlyLiabilities: [...formData.monthlyLiabilities, { payee: "", amount: "" }],
            })
          }
          className="text-teal-600 text-sm font-medium hover:underline py-2"
        >
          + Add another liability
        </button>
      )}
    </div>

    {/* Navigation Buttons */}
    <div className="flex justify-end gap-4 mt-8">
      <button
        onClick={() => setActiveStep(7)}
        className="px-6 py-2 border rounded-md hover:bg-gray-50 transition-colors"
      >
        Back
      </button>

      {/* 🛑 Save button hidden in View Mode */}
      {!isReadOnly && (
        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Save
        </button>
      )}

      <button
        onClick={handleNextStep8}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
      >
        Next
      </button>
    </div>
  </div>
)}

        {activeStep === 9 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
    <div className="space-y-10">
      {/* Applicant Signature */}
      <SignatureBox
        title="Applicant Signature"
        value={formData.certificationSignature}
        error={errors.certificationSignature}
       readOnly={isReadOnly}
        onChange={(val) =>
          !isReadOnly && setFormData((p) => ({ ...p, certificationSignature: val }))
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Legal Name */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Legal Name of Signer <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            name="certificationSignerName"
            value={formData.certificationSignerName}
            onChange={handleChange}
            disabled={isReadOnly} // 🔒 Lock name input
            placeholder="Enter full legal name"
            className={`w-full h-[45px] border rounded-md px-4 py-2 outline-none transition-colors ${
              isReadOnly
                ? "bg-gray-100 cursor-not-allowed text-gray-600 border-gray-200"
                : errors.certificationSignerName
                ? "border-red-500 focus:ring-1 focus:ring-red-500"
                : "focus:ring-1 focus:ring-teal-500 border-gray-300"
            }`}
          />

          {errors.certificationSignerName && (
            <p className="text-xs text-red-500 mt-1">
              {errors.certificationSignerName}
            </p>
          )}
        </div>

        {/* Date & Time (Always Read-Only) */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Date & Time of Signature
          </label>

          <input
            type="text"
            readOnly
            value={formatDateTime(formData.certificationDateTime)}
            className="w-full h-[45px] border rounded-md px-4 py-2 bg-gray-100 cursor-not-allowed text-gray-500"
          />
        </div>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-4 mt-10">
      <button
        onClick={() => setActiveStep(8)}
        className="px-6 py-2 border rounded-md hover:bg-gray-50 transition-colors"
      >
        Back
      </button>

      {/* 🛑 Hide Save button in View Mode */}
      {!isReadOnly && (
        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2 bg-teal-800 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Save
        </button>
      )}

      <button
        onClick={handleNextStep9}
        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
      >
        Next
      </button>
    </div>
  </div>
)}

{activeStep === 10 && (
  <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
    <h2 className="text-lg font-semibold mb-8 text-center text-gray-800 tracking-wide uppercase">
      {isReadOnly ? "Document Review" : "Document Upload"}
    </h2>

    <div className="space-y-4">
      {DOCUMENT_LIST.map((doc, index) => {
        // Business Logic: Hide tenant affidavit unless 2-unit home
        if (doc.requiresTwoUnit && formData.numberOfUnits !== "2") return null;

        const hasFile = !!step9Files[index];

        return (
          <div 
            key={index} 
            className="border border-gray-100 rounded-lg p-4 bg-gray-50/50 transition-all hover:bg-gray-50"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              {/* Document Label & Required Indicator */}
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <span className="text-gray-400 w-5">{index + 1}.</span>
                  {doc.label}
                  {doc.required && !isReadOnly && (
                    <span className="text-red-500 font-bold">*</span>
                  )}
                </p>
                
                {/* File Name / Status Subtext */}
                {hasFile ? (
                  <p className="text-xs text-green-600 mt-1 ml-7 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {step9Files[index]?.name || "Stored_Document.pdf"}
                  </p>
                ) : doc.uploadDisabled ? (
                  <p className="text-xs text-amber-600 mt-1 ml-7 italic">
                    Will be requested directly from employer.
                  </p>
                ) : (
                  <p className="text-xs text-gray-400 mt-1 ml-7 italic">
                    Not uploaded yet.
                  </p>
                )}
              </div>

              {/* Action Column */}
              {!doc.uploadDisabled && (
                <div className="flex items-center gap-3">
                  {!isReadOnly ? (
                    /* EDIT MODE */
                    <>
                      <label className="px-4 py-1.5 bg-teal-600 text-white text-xs font-semibold rounded hover:bg-teal-700 cursor-pointer transition-colors shadow-sm">
                        Upload
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => handleStep9FileChange(index, e.target.files?.[0] || null)}
                        />
                      </label>
                      {hasFile && (
                        <button
                          type="button"
                          onClick={() => removeStep9File(index)}
                          className="text-red-500 text-xs hover:text-red-700 font-medium"
                        >
                          Remove
                        </button>
                      )}
                    </>
                  ) : (
                    /* READ-ONLY MODE */
                    hasFile ? (
                      <button 
                        type="button"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 rounded-md hover:bg-teal-100 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View
                      </button>
                    ) : (
                      <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 px-2 py-1 bg-gray-100 rounded">
                        Pending
                      </span>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Error Message Section */}
            {step9Errors[index] && !isReadOnly && (
              <p className="text-xs text-red-500 mt-2 ml-7 bg-red-50 p-2 rounded border border-red-100">
                {step9Errors[index]}
              </p>
            )}
          </div>
        );
      })}
    </div>

    {/* FOOTER BUTTONS */}
    <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-100">
      <button
        onClick={() => setActiveStep(9)}
        className="px-6 py-2 text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors"
      >
        ← Previous Step
      </button>

      <div className="flex gap-3">
        {isReadOnly ? (
          <button
            onClick={() => alert("Exiting View Mode")}
            className="px-6 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-black transition-all shadow-sm"
          >
            Close Preview
          </button>
        ) : (
          <button
            onClick={handleSubmitStep10}
            className="px-6 py-2 bg-teal-600 text-white text-sm font-medium rounded-md hover:bg-teal-700 transition-all shadow-md"
          >
            Submit Application
          </button>
        )}
      </div>
    </div>
  </div>
)}
      </section>

      <section className="relative w-full px-0 mb-10 md:mb-0 sm:px-6 lg:px-0 z-0">
        <div className="max-w-7xl mx-auto">
          <div
            className="
        relative overflow-hidden
        rounded-2xl
        bg-teal-700
        px-6 py-6
        sm:px-10 sm:py-8
        flex flex-col sm:flex-row
        items-start sm:items-center
        justify-between
        gap-6
      "
          >
            {/* LEFT CONTENT */}
            <div className="flex items-start gap-4 text-white">
              {/* ICON */}
              <div className="flex-shrink-0">
                <Image
                  src="/icons/ticket.svg"
                  alt="Raise Ticket"
                  width={48}
                  height={48}
                />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  Raise A Ticket
                </h3>
                <p className="text-sm sm:text-base text-white/90">
                  Submit A Ticket & Our Support Team Will Reach Out.
                </p>
              </div>
            </div>

            <Link href="/raise-a-ticket" className="self-start sm:self-auto">
              <button
                className="
      flex items-center gap-3
      border border-white
      text-white
      rounded-full
      px-5 py-2
      sm:px-6 
      hover:bg-white hover:text-teal-700
      transition
    "
              >
                <span className="text-sm sm:text-base font-medium">
                  Raise A Ticket
                </span>

                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-teal-700">
                  <Image
                    src="/icons/arrow.svg"
                    alt="Arrow"
                    width={14}
                    height={14}
                  />
                </span>
              </button>
            </Link>

            <div className="pointer-events-none absolute inset-0 opacity-10 bg-[url('/patterns/abstract.svg')] bg-cover" />
          </div>
        </div>
      </section>

      {/* Document */}
      <Document />

      {/* We apply */}
      <StepsApply />

      {/* FAQ */}
      <Faq />
    </>
  );
}
