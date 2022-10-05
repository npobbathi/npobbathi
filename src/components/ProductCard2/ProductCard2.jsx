/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import PicImage from 'src/assets/images/ProductCard2_pic.png';
import RatingStar from 'src/components/RatingStar/RatingStar';

 
const TypeQuest = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  borderRadius: `14px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  width: "100%",  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
});
  
const Pic = styled("div")({  
  backgroundImage: `url(${PicImage})`,  
  backgroundPosition: `center`,  
  backgroundSize: `cover`,  
  backgroundRepeat: `no-repeat`,  
  borderRadius: `14px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  alignSelf: `stretch`,  
  height: `480px`,  
  margin: `0px`,  
});
  
const About = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `20px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const AboutProduct = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  flexGrow: `1`,  
  margin: `0px`,  
});
  
const Text = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px 0px 10px 0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Product = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 0.87)`,  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `900`,  
  fontSize: `22px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `133.39999914169312%`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const Price = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(75, 75, 75, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `400`,  
  fontSize: `20px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `4px 0px 0px 0px`,  
});
  
const RatingAndColors = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `2px 0px 0px 0px`,  
});
  
const Rating = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Row = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Frame1 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Row1 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Q40 = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 0.87)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `800`,  
  fontSize: `15.259808540344238px`,  
  letterSpacing: `-0.693627655506134px`,  
  textDecoration: `none`,  
  lineHeight: `16.467966079711914px`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const Rating1 = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 4.940389633178711px`,  
});
  
const RatingStar1 = styled(RatingStar)(({ theme }) =>({  
  width: `14px`,  
  height: `13px`,  
  margin: `0px`,  
}));
  
const RatingStar2 = styled(RatingStar)(({ theme }) =>({  
  width: `14px`,  
  height: `13px`,  
  margin: `0px 0px 0px 3.293592929840088px`,  
}));
  
const RatingStar3 = styled(RatingStar)(({ theme }) =>({  
  width: `14px`,  
  height: `13px`,  
  margin: `0px 0px 0px 3.293592929840088px`,  
}));
  
const RatingStar4 = styled(RatingStar)(({ theme }) =>({  
  width: `14px`,  
  height: `13px`,  
  margin: `0px 0px 0px 3.293592929840088px`,  
}));
  
const RatingStar5 = styled(RatingStar)(({ theme }) =>({  
  width: `14px`,  
  height: `13px`,  
  margin: `0px 0px 0px 3.293592929840088px`,  
}));
  
const Q935Reviews = styled("div")(({ theme }) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 0.3)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `500`,  
  fontSize: `11px`,  
  letterSpacing: `0px`,  
  textDecoration: `underline`,  
  lineHeight: `165.9999966621399%`,  
  textTransform: `none`,  
  margin: `0px 0px 0px 8px`,  
}));
  
const Colors = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 0.6)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `800`,  
  fontSize: `15.259808540344238px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `16.467966079711914px`,  
  textTransform: `none`,  
  margin: `9px 0px 0px 0px`,  
});
 
function ProductCard2(props) {
  return (
    <TypeQuest className={props.className} >
      <Helmet>
        <title>Product_Card-2</title>
      </Helmet>
      <Pic >
      </Pic>
      <About >
        <AboutProduct >
          <Text >
            <Product >
              {`Back to School Bag`}
                </Product>
            <Price >
              {`$65`}
                </Price>
          </Text>
          <RatingAndColors >
            <Rating >
              <Row >
                <Frame1 >
                  <Row1 >
                    <Q40 >
                      {`4.0`}
                        </Q40>
                    <Rating1 >
                      <RatingStar1   />
                      <RatingStar2   />
                      <RatingStar3   />
                      <RatingStar4   />
                      <RatingStar5   />
                    </Rating1>
                  </Row1>
                  <Q935Reviews >
                    {`935 reviews`}
                      </Q935Reviews>
                </Frame1>
              </Row>
            </Rating>
            <Colors >
              {`5 colors`}
                </Colors>
          </RatingAndColors>
        </AboutProduct>
      </About>
    </TypeQuest>
  );
}

export default ProductCard2;