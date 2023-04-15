function returnCityNames(){
const southCities = ["מושבים בצפון","טבריה והסביבה","רמת הגולן"];
const northCities = ["עמק יזרעאל","קרית שמונה","כרמיאל והסביבה","גליל ועמקים","עמק החולה והסביבה"];
const westCities = ["עכו - נהריה ","חיפה וחוף הכרמל","קריות","זכרון יעקב - בנימינה וחוף הכרמל"];
const eastCities = ["ישובי השומרון","ירושלים והסביבה","בית שמש והסביבה","מודיעין והסביבה","מושבים באזור ירושלים"];
const eCities = ["נתניה והסביבה","חדרה וישובי עמק חפר","מושבים במרכז","קיסריה והסביבה"];
const fCities = ["רעננה - כפר סבא","רמת השרון - הרצליה","מושבים בשרון","הוד השרון והסביבה"];
const gCities = ["פתח תקווה והסביבה","תל אביב","רמת גן - גבעתיים ","חולון - בת ים","בקעת אונו"];
const hCities =["אשדוד - אשקלון","מושבים בשפלה","גדרה,יבנה והסביבה","נס ציונה- רחובות","רמלה - לודבה","ראשלצ והסביבה"];
const iCities =["באר שבע והסביבה","מושבים בדרום"];
const jCities =["אילת והערבה"]

const cityNames={
    southCities,
    northCities,
    westCities,
    eastCities,
    eCities,
    fCities,
    gCities,
    hCities,
    iCities,
    jCities
}
return cityNames;
}
export default returnCityNames;