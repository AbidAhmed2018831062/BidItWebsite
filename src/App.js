import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import AdminHome from "./Components/Admin/AdminHome";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminMenu from "./Components/Admin/AdminMenu";
import CreateAnAdmin from "./Components/Admin/CreateAnAdmin";
import CreateArticles from "./Components/Admin/CreateArticles";
import PrivateOutletAdmin from "./Components/Admin/PrivateOutletAdmin";
import AfterSignIn from "./Components/AfterSignin";
import ChangeEmail from "./Components/ChangeEmail";
import ChangePhone from "./Components/ChangePhone";
import CommentsExpand from "./Components/CommentsExpand";
import Completion from "./Components/Completion";
import EditProfile from "./Components/EditProfile";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import ForgotPassword from "./Components/ForgotPassword";
import ToDo from "./Components/GoogleLogin";
import Home from "./Components/Home";
import MyBids from "./Components/MyBids";
import Navbar from "./Components/Navbar";
import NotAuthorized from "./Components/NotAuthorized";
import Payment from "./Components/Payment";
import PlanForm from "./Components/Planform";
import PositionedMenu from "./Components/PositionedMenu";
import PostBid from "./Components/PostBid";
import PostBidUpdate from "./Components/PostBidUpdate";
import PostReview from "./Components/PostReview";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import PrivateOutlet from "./Components/PrivateOutlet";
import Profile from "./Components/Profile";
import Results from "./Components/Results";
import ShowArticles from "./Components/ShowArticles";
import ShowBids from "./Components/ShowBids";
import ShowProfessionalProfile from "./Components/ShowProfessionalProfile";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import StripeCheckout from "./Components/StripeCheckout";
import Support from "./Components/Support";
import TermsofUse from "./Components/TermsofUse";
import Thanks from "./Components/Thanks";
import ViewArticle from "./Components/ViewArticle";
import ViewNews from "./Components/ViewNews";
function App() {
  
  return (
    
    <Box>
        <Navbar />  
       <Routes>
         <Route path="footer" element={<Footer/>}></Route>
         <Route path="google" element={<ToDo/>}></Route>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/:search" element={<Home/>}></Route>
         <Route path="/home" element={<Home/>}></Route>
         <Route path="/signin" element={<SignIn/>}></Route>
         <Route path="/signup" element={<SignUp/>}></Route>
         <Route path="/becomeadmin/signup" element={<CreateAnAdmin/>}></Route>
         <Route path="/admin/login" element={<AdminLogin/>}></Route>
         
         <Route path="/admin/*" element={<PrivateOutletAdmin />}>
         <Route path="menu" element={<AdminMenu/>}></Route>
       <Route path="home" element={<AdminHome/>}></Route>
       <Route path="createarticle" element={<CreateArticles/>}></Route>
       <Route path="home/showbid/:id" element={<ShowBids/>}></Route>
          </Route>
          <Route path="faq" element={<FAQ/>}></Route>
          <Route path="aboutus" element={<AboutUs/>}></Route>
          <Route path="support" element={<Support/>}></Route>
         <Route path="forgot" element={<ForgotPassword/>}></Route>
         
         <Route path="/*" element={<PrivateOutlet />}>
         <Route path="profile" element={<Profile/>}></Route>
         <Route path="showbid/:id" element={<ShowBids/>}></Route>
         <Route path="postbid" element={<PostBid/>}></Route>
         <Route path="position" element={<PositionedMenu/>}></Route>
         <Route path="updatebid/:id" element={<PostBidUpdate/>}></Route>
         <Route path="mybids" element={<MyBids/>}></Route>
         <Route path="planform" element={<PlanForm/>}></Route>
         <Route path="completion" element={<Completion/>}></Route>
         <Route path="stripe/:id" element={<StripeCheckout/>}></Route>
         <Route path="payment/:id2" element={<Payment/>}></Route>
         <Route path="viewarticle/:id" element={<ViewArticle/>}></Route>
         <Route path="payment" element={<Payment/>}></Route>
         <Route path="result/:id" element={<Results/>}></Route>
         <Route path="review/:id" element={<PostReview/>}></Route>
         <Route path="thanks" element={<Thanks/>}></Route>
         <Route path="editprofile" element={<EditProfile/>}></Route>
         <Route path="privacypolicy" element={<PrivacyPolicy/>}></Route>
         <Route path="termsofuse" element={<TermsofUse/>}></Route>
         <Route path="expandcomments" element={<CommentsExpand/>}></Route>
         <Route path="aftersignin" element={<AfterSignIn/>}></Route>
         <Route path="changeemail/:email" element={<ChangeEmail/>}></Route>
         <Route path="changephone/:phone" element={<ChangePhone/>}></Route>
         <Route path="shownews/:id" element={<ViewNews/>}></Route>
         <Route path="viewuserprofile/:id" element={<ShowProfessionalProfile/>}></Route>
         <Route path="showarticles" element={<ShowArticles/>}></Route>
         <Route path="*/unauthorized" element={<NotAuthorized/>}></Route>
        </Route>
         </Routes>
    </Box>
  );
}

export default App;
