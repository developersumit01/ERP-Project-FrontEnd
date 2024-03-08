import BackgroundCSS from"../CSS/Background.module.css";
import bottumImage from '../assets/images/bottumImage.svg';
import backIcon from '../assets/Icons/ic_back.svg';
import MyProfile from "./MyProfile";
import Calender from './Calender';
const acadmicInfo=[
  { name: "Name", value: "Sumit Kumar", editable: false },
  { name: "Roll No.", value: "2101280130002", editable: false },
  { name: "Father Name", value: "Hariprasad", editable: false },
  { name: "Mother Name", value: "Phool Kumari", editable: false },
  { name: "Gender", value: "Male", editable: false },
  { name: "D.O.B.", value: "18/02/2004", editable: false },
  { name: "Course", value: "Bechlor of Technology", editable: false },
  { name: "Branch", value: "Information Technology", editable: false },
]
const personalData = [
  { name: "Blood Group", value: "A+", editable: true },
  { name: "Date of Admission", value: "dd-mm-yy", editable: false },
  { name: "Admission Session", value: "2020-21", editable: false },
  { name: "Admission Semester", value: "1", editable: false },
  { name: "College", value: "Bharat Institute of Technology, Meerut", editable: false },
  { name: "Semester", value: "6", editable: false },
  { name: "Mobile No.", value: "8439060298", editable: true },
  { name: "Email ID", value: "sumitkumar84390@gmail.com", editable: true },
  { name: "Address", value: "278 Pocket C, Sector 4C", editable: true },
  { name: "City", value: "Meerut", editable: true },
  { name: "State", value: "Utter Pradesh", editable: true },
  { name: "Country", value: "India", editable: true },
  { name: "Pincode", value: "250103", editable: true },
  { name: "Addhar No.", value: "XXXX XXXX XXXX", editable: true },
  { name: "Home Mobile No.", value: "XXXXXXXXXX", editable: true },
];
const Background = () => {
  return (
    <>
      <div className={BackgroundCSS.mainBackgroundContainer}>
        <div className={BackgroundCSS.backgroundContainer}>
          <div className={BackgroundCSS.backgroundHeader}>
            <div className={BackgroundCSS.arrow}>
              <img src={backIcon} alt="" />
            </div>
            <div className={BackgroundCSS.middleButton}>
              <input type="radio" id="Attandance" name="select" className={BackgroundCSS.radioButton} />
              <label htmlFor="Attandance" className={BackgroundCSS.lableR}>Attandance</label>
              <input type="radio" id="Holidays" name="select" className={BackgroundCSS.radioButton} />
              <label htmlFor="Holidays" className={BackgroundCSS.lableL} >Holidays</label>
            </div>
            <div className={BackgroundCSS.rightButton}>Done</div>
            <div className={BackgroundCSS.forMobile}>
              <div className={BackgroundCSS.upperButton}>
                <div className={BackgroundCSS.mobileArrow}>
                  <img src={backIcon} alt="" />
                </div>
                <div className={BackgroundCSS.mobileRightButton}>Done</div>
              </div>
              <div className={BackgroundCSS.mobileMiddleButton}>
                <span>Attandance</span>
                <span>Holidays</span>
              </div>
            </div>
          </div>

          <div className={BackgroundCSS.backgroundCurve}>
            <MyProfile acadmicInfo={acadmicInfo} personalData={personalData} />
            {/* <Calender /> */}
          </div>
          <img src={bottumImage} alt="" className={BackgroundCSS.buttonImage} />
        </div>
      </div>
    </>
  );
};
export default Background;