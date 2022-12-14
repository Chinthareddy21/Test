export class SearchPageObjects {
    protected static COOKIE_ACCEPT_XPATH = `//*[@id="ccc-notify-accept"]`;
    protected static COOKIE_REJECT_XPATH = `//*[@id="ccc-notify-reject"]`;
    protected static AGREE_XPATH = `//a[@aria-label='dismiss cookie message']`;
    protected static SEARCH_BOX_XPATH = `//*[@id="global-search-input"]`;
    protected static START_PAGE_XPATH = `//*[@id="search-container"]/div[2]/div[2]/div/div[2]/div[1]/i[1]`;
    protected static BEFORE_PAGE_XPATH = `//*[@id="search-container"]/div[2]/div[2]/div/div[2]/div[2]/i`;
    protected static NEXT_PAGE_XPATH = `//*[@id="search-container"]/div[2]/div[2]/div/div[2]/div[3]/i`;
    protected static LAST_PAGE_XPATH = `//*[@id="search-container"]/div[2]/div[2]/div/div[2]/div[4]/i`;
    protected static SEARCH_XPATH = `//input[@id='inline-search-input']`;
    protected static ALL_XPATH = `//*[@id="search-container"]/div[1]/div/ul/li[1]/label`;
    protected static PRODUCTS_XPATH = `//*[@id="search-container"]/div[1]/div/ul/li[2]/label`;
    protected static TECHNICAL_DOCUMENT_XPATH = `//*[@id="search-container"]/div[1]/div/ul/li[3]/label`;
    protected static LANGUAGE_XPATH = `//*[@id="tech-docs-refiners"]/div[1]/div`;
    protected static DOCUMENT_CATEGORIES_XPATH = `//*[@id="tech-docs-refiners"]/div[2]/div`;
    protected static PRODUCT_LINES_XPATH = `//*[@id="tech-docs-refiners"]/div[3]/div/div[1]`;
    protected static LANGUAGE_ARROW_XPATH = `//*[@id="tech-docs-refiners"]/div[1]/div/i`;
    protected static DOCUMENT_CATEGORIES_ARROW_XPATH = `//*[@id="tech-docs-refiners"]/div[2]/div/i`;
    protected static PRODUCT_LINES_ARROW_XPATH = `//*[@id="tech-docs-refiners"]/div[3]/div/i`;
    protected static CLEAR_XPATH = `//*[@id="tech-docs-refiners"]/div[4]/div`;
    protected static SELECT_ALL_XPATH = `//*[@id="chk-tech-docs-download"]`;
    protected static VIEW_XPATH = `//*[@id="search-container"]/div[2]/div[2]/div/div[3]/div[1]/div`;
    protected static SORT_XPATH = `//*[@id="sort-dropdown-header"]/div`;
    protected static ASSAY_SHEETS_XPATH = `//*[@id="tech-docs-refiners"]/div[2]/div/div[2]/div[1]`;
    protected static CONSUMABLE_XPATH = `//*[@id="tech-docs-refiners"]/div[2]/div/div[2]/div[2]`;
    protected static HARDWARE_XPATH = `//*[@id="tech-docs-refiners"]/div[2]/div/div[2]/div[3]`;
    protected static CERTIFICCAATE_OF_COMPLIANCE_XPATH = `//*[@id="tech-docs-refiners"]/div[2]/div/div[2]/div[4]`;
    protected static CERTIFICATE_OF_ANALYSIS_XPATH = `//*[@id="tech-docs-refiners"]/div[2]/div/div[2]/div[5]`;
    protected static CONSUMABLE_IFU_SETTING_SHEET_XPATH = `//*[@id="tech-docs-refiners"]/div[2]/div/div[2]/div[6]`;
    protected static CONSUMABLE_INFORMMATION_XPATH = `//*[@id="tech-docs-refiners"]/div[2]/div/div[2]/div[7]`;
    protected static CUSTOMER_NOTIFICATION_XPATH = `//*[@id="tech-docs-refiners"]/div[2]/div/div[2]/div[8]`;
    protected static INSTRUMENT_IFU_XPATH = `//*[@id="tech-docs-refiners"]/div[2]/div/div[2]/div[9]`;
    protected static NATIONAL_RECOGNIZED_TESTING_LABARATORY_XPATH = `//*[@id="tech-docs-refiners"]/div[2]/div/div[2]/div[10]`;
    protected static OTHER_XPATH = `//*[@id="tech-docs-refiners"]/div[2]/div/div[2]/div[11]`;
    protected static DATA_SAFETY_SHEET_XPATH = `//*[@id="tech-docs-refiners"]/div[2]/div/div[2]/div[12]`;
    protected static AUTOMATION_XPATH = `//div[@class='menu transition visible']//div[@value='Automation'][normalize-space()='Automation']`;
    protected static BLOOD_BANKING_XPATH = `//div[@class='menu transition visible']//div[@value='Blood Banking'][normalize-space()='Blood Banking']`;
    protected static CHEMISTRY_XPATH = `//div[@class='menu transition visible']//div[@value='Chemistry'][normalize-space()='Chemistry']`;
    protected static CLINICAL_INFORMATION_XPATH = `//div[@class='menu transition visible']//div[@value='Clinical Information Management Tools'][normalize-space()='Clinical Information Management Tools']`;
    protected static CENTRIFUGATION_XPATH = `//div[@class='menu transition visible']//div[@value='Clinical Centrifugation'][normalize-space()='Clinical Centrifugation']`;
    protected static CYTOMETRY_XPATH = `//div[@class='menu transition visible']//div[@value='Clinical Flow Cytometry'][normalize-space()='Clinical Flow Cytometry']`;
    protected static HEMATOLOGY_XPATH = `//div[@class='menu transition visible']//div[@value='Hematology'][normalize-space()='Hematology']`;
    protected static HEMOSTASIS_XPATH = `//div[@class='menu transition visible']//div[@value='Hemostasis'][normalize-space()='Hemostasis']`;
    protected static IMMUNOASSAY_XPATH = `//div[@class='menu transition visible']//div[@value='Immunoassay'][normalize-space()='Immunoassay']`;
    protected static IMMUNOASSAY_RUO_XPATH = `//div[@class='menu transition visible']//div[@value='Immunoassay RUO'][normalize-space()='Immunoassay RUO']`;
    protected static INTEGRATED_SYSTEMS_XPATH = `//div[@class='menu transition visible']//div[@value='Integrated Systems'][normalize-space()='Integrated Systems']`;
    protected static MICROBIOLOGY_XPATH = `//div[@class='menu transition visible']//div[@value='Microbiology'][normalize-space()='Microbiology']`;
    protected static MOLECULAR_DIAGNOSTICS_XPATH = `//div[@class='menu transition visible']//div[@value='Molecular Diagnostics'][normalize-space()='Molecular Diagnostics']`;
    protected static PROTEIN_CHEMISTRY_XPATH = `//div[@class='menu transition visible']//div[@value='Protein Chemistry'][normalize-space()='Protein Chemistry']`;
    protected static RAPID_DIAGNOSTICS_XPATH = `//div[@class='menu transition visible']//div[@value='Rapid Diagnostics'][normalize-space()='Rapid Diagnostics']`;
    protected static URINALYSIS_XPATH = `//div[@class='menu transition visible']//div[@value='Urinalysis'][normalize-space()='Urinalysis']`;
    protected static RESULT_CHECKBOX_01_XPATH = `//*[@id="search-container"]/div[2]/div[3]/div[1]/div/div/table/tbody/tr/td[1]/div`;
    protected static RESULT_CHECKBOX_02_XPATH = `//*[@id="search-container"]/div[2]/div[3]/div[2]/div/div/table/tbody/tr/td[1]/div`;
    protected static RESULT_CHECKBOX_03_XPATH = `//*[@id="search-container"]/div[2]/div[3]/div[3]/div/div/table/tbody/tr/td[1]/div`;
    protected static RESULT_CHECKBOX_04_XPATH = `//*[@id="search-container"]/div[2]/div[3]/div[4]/div/div/table/tbody/tr/td[1]/div`;
    protected static RESULT_CHECKBOX_05_XPATH = `//*[@id="search-container"]/div[2]/div[3]/div[5]/div/div/table/tbody/tr/td[1]/div`;
    protected static RESULT_CHECKBOX_06_XPATH = `//*[@id="search-container"]/div[2]/div[3]/div[6]/div/div/table/tbody/tr/td[1]/div`;
    protected static RESULT_CHECKBOX_07_XPATH = `//*[@id="search-container"]/div[2]/div[3]/div[7]/div/div/table/tbody/tr/td[1]/div`;
    protected static RESULT_CHECKBOX_08_XPATH = `//*[@id="search-container"]/div[2]/div[3]/div[8]/div/div/table/tbody/tr/td[1]/div`;
    protected static RESULT_CHECKBOX_09_XPATH = `//*[@id="search-container"]/div[2]/div[3]/div[9]/div/div/table/tbody/tr/td[1]/div`;
    protected static RESULT_CHECKBOX_10_XPATH = `//*[@id="search-container"]/div[2]/div[3]/div[10]/div/div/table/tbody/tr/td[1]/div`;
    protected static RESULT_01_XPATH = `//div[3]/div[2]/div/div[1]/div[3]/div[2]/div[3]/div[1]/a`;
    protected static RESULT_02_XPATH = `//div[3]/div[2]/div/div[1]/div[3]/div[2]/div[3]/div[2]/a`;
    protected static RESULT_03_XPATH = `//div[3]/div[2]/div/div[1]/div[3]/div[2]/div[3]/div[3]/a`;
    protected static RESULT_04_XPATH = `//div[3]/div[2]/div/div[1]/div[3]/div[2]/div[3]/div[4]/a`;
    protected static RESULT_05_XPATH = `//div[3]/div[2]/div/div[1]/div[3]/div[2]/div[3]/div[5]/a`;
    protected static RESULT_06_XPATH = `//div[3]/div[2]/div/div[1]/div[3]/div[2]/div[3]/div[6]/a`;
    protected static RESULT_07_XPATH = `//div[3]/div[2]/div/div[1]/div[3]/div[2]/div[3]/div[7]/a`;
    protected static RESULT_08_XPATH = `//div[3]/div[2]/div/div[1]/div[3]/div[2]/div[3]/div[8]/a`;
    protected static RESULT_09_XPATH = `//div[3]/div[2]/div/div[1]/div[3]/div[2]/div[3]/div[9]/a`;
    protected static RESULT_10_XPATH = `//div[3]/div[2]/div/div[1]/div[3]/div[2]/div[3]/div[10]/a`;
    protected static DOWNLOAD_XPATH = `(//button[@id='download'])[2]`;
    protected static RESULT_BOX_DOWNLOAD = '(//*[@id="Layer_1"])[1]';
    protected static GENERATE_ZIP_XPATH = `//*[@id="get-zip-button"]`;
    protected static CAPTCHA_XPATH = `//*[@id="recaptcha-accessible-status"]`;
    protected static VIEW_25_XPATH = `//div[contains(@class,'menu transition visible')]//div[contains(@value,'25')][normalize-space()='25']`;
    protected static VIEW_50_XPATH = `//div[contains(@class,'menu transition visible')]//div[contains(@value,'50')][normalize-space()='50']`;
    protected static VIEW_100_XPATH = `//div[contains(@class,'menu transition visible')]//div[contains(@value,'100')][normalize-space()='100']`;
    protected static SEARCHED_XPATH = '//div[3]/div[2]/div/div[1]/div[1]/div/label/span[1]';
    protected static PAGE_1_XPATH = '//div[3]/div[2]/div/div[1]/div[3]/div[2]/div[2]/div/div[2]/ul/li[1]';
    protected static PAGE_2_XPATH = '//div[3]/div[2]/div/div[1]/div[3]/div[2]/div[2]/div/div[2]/ul/li[2]';
    protected static PAGE_3_XPATH = '//div[3]/div[2]/div/div[1]/div[3]/div[2]/div[2]/div/div[2]/ul/li[3]';
    protected static PAGE_4_XPATH = '//div[3]/div[2]/div/div[1]/div[3]/div[2]/div[2]/div/div[2]/ul/li[4]';
    protected static PAGE_5_XPATH = '//div[3]/div[2]/div/div[1]/div[3]/div[2]/div[2]/div/div[2]/ul/li[5]';
}