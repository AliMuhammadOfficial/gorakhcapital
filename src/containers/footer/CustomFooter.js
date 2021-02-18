import { Footer } from 'components-extra'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Code from '@material-ui/icons/Code';
import Email from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function CustomFooter() {
    return (
        // <footer style={{backgroundColor: "#406979", color: "#fff", padding: "100px 0 100px 0"}}>
        //     <h1 style={{margin: "0 auto", textAlign: "center"}}>Footer</h1>
        // </footer>
        // live
        <>
<Footer title="Awesome footer" style={{backgroundColor: "#202f39"}}>
  <Footer.Column title="Awesome Column A">
    <Footer.Item icon={<AccountCircle />} href="#">
      My Account
    </Footer.Item>
    <Footer.Item icon={<Code />} onClick={() => console.log('Starting coding now!')}>
      Start Coding
    </Footer.Item>
    <Footer.Item icon={<Email />} href="lelain-dot-alexandre-at-gmail-dot-com">
      Contact Us
    </Footer.Item>
  </Footer.Column>
  <Footer.Column title="Awesome Column B">
    <Footer.Item icon={<Code />} onClick={() => console.log('Starting coding now!')}>
      Start Coding
    </Footer.Item>
    <Footer.Item icon={<AccountCircle />} href="#">
      My Account
    </Footer.Item>
    <Footer.Item icon={<Email />} href="lelain-dot-alexandre-at-gmail-dot-com">
      Contact Us
    </Footer.Item>
  </Footer.Column>
  <Footer.Column title="Follow Us on Social Media">
    <Footer.Item icon={<FacebookIcon />} href="https://facebook.com/gorakhcapital" target="_blank">
      Facebook
    </Footer.Item>
    <Footer.Item icon={<Code />} onClick={() => console.log('Starting coding now!')}>
      Start Coding
    </Footer.Item>
    <Footer.Item icon={<AccountCircle />} href="#">
      My Account
    </Footer.Item>
  </Footer.Column>
  
</Footer>
<YourOwnBanner />
</>
    )
}


function YourOwnBanner() {
    return (
        <div style={{color: "#fff", backgroundColor: "#1a272f", textAlign: "center", padding: "20px"}}>2021 © All Copyright Reserved By <a href="https://gorakhcapital.com" style={{color: "#fff", textDecoration: "none"}} >GorakhCapital</a></div>
    )
}

