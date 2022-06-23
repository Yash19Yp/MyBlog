import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Text,
  Line,
  Image,
  Stack,
  Input,
  Button,
  PagerIndicator,
  List,
} from "components";

const AboutUsPage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/podcasts");
  }
  function handleNavigate3() {
    navigate("/blogpost1");
  }
  function handleNavigate4() {
    navigate("/contactus");
  }
  function handleNavigate5() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-white_A700 font-nunitosans items-start justify-end mx-[auto] overflow-auto lg:pt-[27px] xl:pt-[31px] 2xl:pt-[35px] 3xl:pt-[43px] pt-[49px] w-[100%]">
        <Column className="items-center w-[100%]">
          <header className="mx-[auto] w-[86%]">
            <Row className="items-start justify-end lg:pl-[10px] xl:pl-[11px] 2xl:pl-[13px] 3xl:pl-[15px] pl-[18px] w-[100%]">
              <Text className="font-black lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[21px] text-[24px] text-center text-indigo_900 w-[auto]">{`LAOS.`}</Text>
              <Column className="font-publicsans items-start justify-start xl:mb-[1px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] mb-[3px] lg:ml-[253px] xl:ml-[290px] 2xl:ml-[326px] 3xl:ml-[391px] ml-[444.81px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] mt-[6px] w-[35%]">
                <Column className="items-center w-[100%]">
                  <Row className="items-center justify-between 3xl:pl-[11px] pl-[13px] lg:pl-[7px] xl:pl-[8px] 2xl:pl-[9px] w-[100%]">
                    <Text
                      className="common-pointer cursor-pointer hover:font-bold font-bold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-center text-deep_purple_A200 tracking-ls1 w-[auto]"
                      onClick={handleNavigate5}
                    >{`Home`}</Text>
                    <Text
                      className="common-pointer cursor-pointer hover:font-bold font-bold lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] ml-[74.98px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-bluegray_600 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]"
                      onClick={handleNavigate2}
                    >{`Podcast`}</Text>
                    <Text
                      className="common-pointer cursor-pointer hover:font-bold font-bold lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] ml-[72.21px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-bluegray_600 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]"
                      onClick={handleNavigate3}
                    >{`Blog`}</Text>
                    <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] ml-[69.85px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-bluegray_600 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]">{`About`}</Text>
                    <Text
                      className="common-pointer cursor-pointer hover:font-bold font-bold lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] ml-[74px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-bluegray_600 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]"
                      onClick={handleNavigate4}
                    >{`Contact`}</Text>
                  </Row>
                </Column>
                <Line className="bg-deep_purple_A200 h-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] mt-[3px] w-[13%]" />
              </Column>
              <Image
                src={"images/img_search21_5.svg"}
                className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] h-[30px] lg:ml-[290px] xl:ml-[332px] 2xl:ml-[373px] 3xl:ml-[448px] ml-[508.8px] my-[1px] object-contain w-[3%]"
                alt="search21"
              />
            </Row>
          </header>
          <Stack className="lg:h-[457px] xl:h-[523px] 2xl:h-[588px] 3xl:h-[705px] h-[800px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[36px] w-[100%]">
            <div className="absolute bg-gray_401 lg:h-[457px] xl:h-[523px] 2xl:h-[588px] 3xl:h-[705px] h-[800px] inset-[0] w-[100%]"></div>
            <Image
              src={"images/img_brookecaglecb.png"}
              className="absolute lg:h-[457px] xl:h-[523px] 2xl:h-[588px] 3xl:h-[705px] h-[800px] inset-[0] object-cover w-[100%]"
              alt="brookecaglecb"
            />
            <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[6%] my-[auto] w-[24%]">
              <Text className="font-normal font-worksans leading-[normal] not-italic lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-[48px] text-left text-white_A700 w-[100%]">{`Instant collaborations for remote teams`}</Text>
              <Text className="font-bold font-mulish leading-[163.15%] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-left text-white_A700 w-[63%]">
                {
                  <>
                    {`All in one for your remote team chats, `}
                    <br />
                    {`collaboration and track projects`}
                  </>
                }
              </Text>
              <Column className="font-mulish items-center lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[41px] w-[100%]">
                <Row className="items-center justify-start lg:pr-[10px] xl:pr-[11px] 2xl:pr-[13px] 3xl:pr-[15px] pr-[17.98px] w-[100%]">
                  <Column className="border border-black_900 border-solid w-[62%]">
                    <Input
                      className="placeholder:bg-transparent bg-white_A700 border-2 border-bluegray_200 border-solid font-semibold xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] pb-[18.13px] xl:pl-[10px] 2xl:pl-[11px] 3xl:pl-[14px] pl-[16px] lg:pl-[9px] xl:pt-[12px] 2xl:pt-[14px] 3xl:pt-[16px] pt-[19.13px] lg:py-[10px] rounded-radius4 xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] text-[16px] lg:text-[9px] placeholder:text-bluegray_500 text-bluegray_500 text-left w-[100%]"
                      name="Email"
                      placeholder={`Email`}
                    ></Input>
                  </Column>
                  <Column className="border border-black_900 border-solid 3xl:ml-[10px] ml-[12.48px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] w-[32%]">
                    <Button className="bg-light_blue_A400 font-bold lg:py-[11px] xl:py-[13px] 2xl:py-[14px] 3xl:py-[17px] py-[20px] rounded-radius4 xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-center text-white_A700 w-[100%]">{`Get early access`}</Button>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Stack>
          <Row className="font-mulish items-start justify-start 2xl:mt-[105px] 3xl:mt-[126px] mt-[144px] lg:mt-[82px] xl:mt-[93px] 3xl:pl-[110px] pl-[126px] lg:pl-[71px] xl:pl-[82px] 2xl:pl-[92px] lg:pr-[17px] xl:pr-[20px] 2xl:pr-[22px] 3xl:pr-[27px] pr-[31px] w-[100%]">
            <Column className="items-start justify-start 2xl:mb-[108px] 3xl:mb-[130px] mb-[148px] lg:mb-[84px] xl:mb-[96px] lg:mt-[120px] xl:mt-[138px] 2xl:mt-[155px] 3xl:mt-[186px] mt-[212px] w-[24%]">
              <Text className="font-extrabold leading-[normal] lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-[48px] text-black_900 text-left w-[86%]">{`Your Hub for teamwork`}</Text>
              <Text className="font-semibold leading-[normal] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] mt-[30px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-bluegray_902 text-left w-[100%]">{`Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.`}</Text>
              <Column className="lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[34px] w-[100%]">
                <Row className="items-start justify-start pl-[1px] lg:pr-[200px] xl:pr-[229px] 2xl:pr-[258px] 3xl:pr-[310px] pr-[352px] w-[100%]">
                  <Text className="font-bold xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] mt-[6px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-blue_400 text-left underline w-[auto]">{`Learn more`}</Text>
                  <Image
                    src={"images/img_iconactionarr.svg"}
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] mb-[10px] lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] object-contain lg:w-[13px] xl:w-[15px] 2xl:w-[17px] 3xl:w-[21px] w-[24px]"
                    alt="iconactionarr"
                  />
                </Row>
              </Column>
            </Column>
            <Stack className="font-roboto lg:h-[413px] xl:h-[472px] 2xl:h-[531px] 3xl:h-[637px] h-[723px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] ml-[20px] w-[67%]">
              <Stack className="absolute lg:h-[413px] xl:h-[472px] 2xl:h-[531px] 3xl:h-[637px] h-[723px] inset-[0] w-[100%]">
                <Stack className="absolute lg:h-[413px] xl:h-[472px] 2xl:h-[531px] 3xl:h-[637px] h-[723px] right-[0] w-[89%]">
                  <Image
                    src={"images/img_ootomeetings1.png"}
                    className="absolute bottom-[0] lg:h-[403px] xl:h-[461px] 2xl:h-[518px] 3xl:h-[621px] h-[705px] inset-x-[0] object-cover rounded-radius20 top-[2%] w-[100%]"
                    alt="ootoMeetings1"
                  />
                  <Image
                    src={"images/img_icon.svg"}
                    className="absolute lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] h-[55.02px] left-[30%] object-contain top-[0] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px] w-[55.02px]"
                    alt="icon"
                  />
                </Stack>
                <Column className="absolute bg-white_A700 items-start justify-start left-[0] outline outline-[0.5px] outline-bluegray_50 3xl:pb-[13px] pb-[15px] lg:pb-[8px] xl:pb-[9px] xl:pt-[10px] 3xl:pt-[14px] pt-[16px] lg:pt-[9px] 2xl:py-[11px] rounded-radius6 shadow-bs6 top-[13%] w-[20%]">
                  <Text className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:ml-[9px] not-italic opacity-op6963881 3xl:text-[10px] text-[12px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-gray_600 text-left tracking-ls11 w-[auto]">
                    <span className="text-gray_600 text-[11px] font-roboto lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px]">
                      <>{`11:00 `}</>
                    </span>
                    <span className="text-gray_600 text-[10px] font-roboto lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px]">
                      <>{`AM`}</>
                    </span>
                    <span className="text-gray_600 text-[11px] font-roboto lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px]">
                      <>{` - 11:30 `}</>
                    </span>
                    <span className="text-gray_600 text-[10px] font-roboto lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px]">
                      <>{`AM`}</>
                    </span>
                  </Text>
                  <Text className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:ml-[9px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] xl:mt-[9px] not-italic 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-bluegray_800 text-left tracking-ls11 w-[auto]">{`Website for the Product`}</Text>
                  <Column className="items-center lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[29px] 2xl:pl-[11px] 3xl:pl-[13px] pl-[15px] lg:pl-[8px] 2xl:pr-[10px] 3xl:pr-[12px] pr-[14px] lg:pr-[7px] xl:px-[9px] w-[100%]">
                    <Row className="items-center justify-start mx-[auto] w-[89%]">
                      <Image
                        src={"images/img_sendinvitation.svg"}
                        className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] mb-[1px] object-contain lg:w-[13px] xl:w-[15px] 2xl:w-[17px] 3xl:w-[21px] w-[24px]"
                        alt="sendinvitation"
                      />
                      <Stack className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] h-[25px] w-[37%]">
                        <PagerIndicator
                          className="absolute h-[25px] inset-[0] w-[auto]"
                          count={3}
                          activeCss="inline-block cursor-pointer w-[24px] h-[24px] outline-blue_400_b2 outline-[0.5px] outline bg-white_A700 absolute rounded-radius2"
                          activeIndex={undefined}
                          inactiveCss="inline-block cursor-pointer w-[25px] h-[25px] bg-blue_400_19 absolute rounded-radius2"
                          sliderRef={undefined}
                          selectedWrapperCss="2xl:mx-[2px] 3xl:mx-[3px] inline-block lg:mx-[1px] mx-[3.50px] xl:mx-[2px]"
                          unselectedWrapperCss="2xl:mx-[2px] 3xl:mx-[3px] inline-block lg:mx-[1px] mx-[3.50px] xl:mx-[2px]"
                        />
                        <Text className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] xl:text-[5px] lg:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-[9px] text-blue_401 text-left tracking-ls11 w-[max-content]">{`AM`}</Text>
                      </Stack>
                      <Text className="font-medium 3xl:h-[10px] h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] mr-[7px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] my-[7px] xl:text-[5px] lg:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-[9px] text-amber_500 text-left tracking-ls11 w-[auto]">{`ES`}</Text>
                      <Image
                        src={"images/img_pinicon.svg"}
                        className="h-[10px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:mb-[4px] xl:mb-[5px] 3xl:mb-[7px] mb-[8px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] ml-[74px] lg:mt-[3px] xl:mt-[4px] 3xl:mt-[6px] mt-[7px] 2xl:my-[5px] object-contain w-[2%]"
                        alt="pinicon"
                      />
                      <Text className="font-normal xl:mb-[3px] 2xl:mb-[4px] 3xl:mb-[5px] mb-[6px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] ml-[5px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] lg:my-[3px] not-italic opacity-op6963881 text-[10px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_600 text-left tracking-ls11 w-[auto]">{`10 attachements`}</Text>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="absolute bottom-[11%] lg:h-[51px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] h-[89px] left-[8%] pr-[1px] shadow-bs7 w-[7%]">
                <Stack className="absolute lg:h-[51px] xl:h-[59px] 2xl:h-[66px] 3xl:h-[79px] h-[89px] inset-[0] w-[100%]">
                  <Image
                    src={"images/img_icon_1.svg"}
                    className="absolute bottom-[0] lg:h-[46px] xl:h-[52px] 2xl:h-[58px] 3xl:h-[70px] h-[78.95px] left-[0] object-contain w-[85%]"
                    alt="icon"
                  />
                  <Image
                    src={"images/img_oval2.svg"}
                    className="absolute lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[34.44px] object-contain right-[0] rounded-radius501 top-[0] w-[auto]"
                    alt="Oval2"
                  />
                </Stack>
                <Text className="absolute font-bold right-[12%] 3xl:text-[10px] text-[12px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-left text-white_A700 top-[8%] tracking-ls11 w-[auto]">{`3`}</Text>
              </Stack>
            </Stack>
          </Row>
        </Column>
        <Column className="items-start justify-start lg:mt-[133px] xl:mt-[152px] 2xl:mt-[171px] 3xl:mt-[206px] mt-[234px] w-[100%]">
          <Column className="font-roboto items-center w-[100%]">
            <Row className="items-start justify-between xl:pl-[104px] 2xl:pl-[117px] 3xl:pl-[140px] pl-[160px] lg:pl-[91px] lg:pr-[215px] xl:pr-[246px] 2xl:pr-[276px] 3xl:pr-[332px] pr-[377px] w-[100%]">
              <Stack className="lg:h-[324px] xl:h-[371px] 2xl:h-[417px] 3xl:h-[500px] h-[567px] w-[27%]">
                <Image
                  src={"images/img_brookecaglejb.png"}
                  className="absolute lg:h-[324px] xl:h-[371px] 2xl:h-[417px] 3xl:h-[500px] h-[567px] inset-[0] object-cover w-[100%]"
                  alt="brookecagleJB"
                />
                <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[11%] w-[44%]">
                  <Column className="bg-white_A700 items-start justify-start outline outline-[0.5px] outline-bluegray_50 pb-[11.19px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] 3xl:pb-[9px] 3xl:pl-[11px] pl-[13.06px] lg:pl-[7px] xl:pl-[8px] 2xl:pl-[9px] lg:pr-[36px] xl:pr-[41px] 2xl:pr-[46px] 3xl:pr-[55px] pr-[63.56px] lg:pt-[10px] xl:pt-[11px] 2xl:pt-[13px] 3xl:pt-[15px] pt-[17.76px] rounded-radius6 w-[92%]">
                    <Text className="font-normal lg:leading-[14px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[22px] leading-[25.00px] ml-[0] not-italic 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-bluegray_800 text-left tracking-ls11 w-[67%]">
                      <span className="text-bluegray_800 font-roboto">
                        <>{`Hey you guys we need to do this and that too `}</>
                      </span>
                      <span className="text-bluegray_900_65 font-roboto">
                        <>{`✌️`}</>
                      </span>
                    </Text>
                    <Row className="items-start justify-start ml-[0] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20.84px] xl:pr-[3px] lg:pr-[3px] 2xl:pr-[4px] 3xl:pr-[5px] pr-[6.09px] w-[44%]">
                      <Image
                        src={"images/img_sendinvitation_1.svg"}
                        className="lg:h-[13px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] h-[21.13px] my-[1px] object-contain opacity-op74 w-[21%]"
                        alt="sendinvitation"
                      />
                      <Stack className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22.179932px] w-[100%]">
                        <PagerIndicator
                          className="absolute h-[22.18px] inset-[0] justify-center m-[auto] w-[auto]"
                          count={4}
                          activeCss="inline-block cursor-pointer w-[20.9px] h-[21.13px] outline-blue_400_b2 outline-[0.5px] outline bg-white_A700 absolute rounded-radius2"
                          activeIndex={undefined}
                          inactiveCss="inline-block cursor-pointer w-[21.77px] h-[22.18px] bg-deep_orange_400_19 absolute rounded-radius2"
                          sliderRef={undefined}
                          selectedWrapperCss="2xl:mx-[2px] 3xl:mx-[2px] inline-block lg:mx-[1px] mx-[3.04px] xl:mx-[1px]"
                          unselectedWrapperCss="2xl:mx-[2px] 3xl:mx-[2px] inline-block lg:mx-[1px] mx-[3.04px] xl:mx-[1px]"
                        />
                        <Text className="absolute font-medium h-[max-content] inset-y-[0] left-[33%] my-[auto] xl:text-[5px] lg:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-[9px] text-deep_orange_400 text-left tracking-ls11 w-[auto]">{`LA`}</Text>
                      </Stack>
                      <Text className="font-medium mb-[6.33px] lg:mr-[16px] xl:mr-[19px] 2xl:mr-[21px] 3xl:mr-[26px] mr-[29.61px] mt-[6.16px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] xl:text-[5px] lg:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-[9px] text-blue_401 text-left tracking-ls11 w-[auto]">{`AM`}</Text>
                      <Text className="font-medium mb-[6.33px] 2xl:ml-[10px] 3xl:ml-[12px] ml-[13.93px] lg:ml-[7px] xl:ml-[9px] mt-[6.16px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] xl:text-[5px] lg:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-[9px] text-deep_purple_400 text-left tracking-ls11 w-[auto]">{`FS`}</Text>
                    </Row>
                  </Column>
                  <Column className="lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[20px] w-[100%]">
                    <Stack className="lg:h-[57px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[88px] h-[99px] w-[100%]">
                      <Stack className="absolute lg:h-[57px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[88px] h-[99px] inset-[0] w-[100%]">
                        <Column className="absolute bg-white_A700 items-start justify-start left-[0] outline outline-[0.5px] outline-bluegray_50 pb-[11.42px] 2xl:pl-[11px] 3xl:pl-[13px] pl-[15px] lg:pl-[8px] xl:pl-[9px] pt-[12.18px] 3xl:py-[10px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] rounded-radius6 w-[88%]">
                          <Text className="font-normal not-italic opacity-op6963881 3xl:text-[10px] text-[12px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-gray_600 text-left tracking-ls11 w-[auto]">
                            <span className="text-gray_600 text-[11px] font-roboto lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px]">
                              <>{`11:00 `}</>
                            </span>
                            <span className="text-gray_600 text-[10px] font-roboto lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px]">
                              <>{`AM`}</>
                            </span>
                            <span className="text-gray_600 text-[11px] font-roboto lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px]">
                              <>{` - 11:30 `}</>
                            </span>
                            <span className="text-gray_600 text-[10px] font-roboto lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px]">
                              <>{`AM`}</>
                            </span>
                          </Text>
                          <Text className="font-normal 3xl:mt-[10px] mt-[11.92px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] not-italic 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-bluegray_800 text-left tracking-ls11 w-[auto]">{`Website for the Product`}</Text>
                          <Row className="items-center justify-start lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22.54px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] pr-[7px] w-[39%]">
                            <Image
                              src={"images/img_sendinvitation_2.svg"}
                              className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[17px] h-[18.28px] mb-[1px] object-contain w-[28%]"
                              alt="sendinvitation"
                            />
                            <Stack className="lg:h-[11px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] h-[19.04004px] w-[100%]">
                              <PagerIndicator
                                className="absolute h-[19.04px] inset-[0] w-[auto]"
                                count={3}
                                activeCss="inline-block cursor-pointer w-[24px] h-[18.28px] outline-blue_400_b2 outline-[0.5px] outline bg-white_A700 absolute rounded-radius2"
                                activeIndex={undefined}
                                inactiveCss="inline-block cursor-pointer w-[25px] h-[19.04px] bg-blue_400_19 absolute rounded-radius2"
                                sliderRef={undefined}
                                selectedWrapperCss="2xl:mx-[2px] 3xl:mx-[3px] inline-block lg:mx-[1px] mx-[3.50px] xl:mx-[2px]"
                                unselectedWrapperCss="2xl:mx-[2px] 3xl:mx-[3px] inline-block lg:mx-[1px] mx-[3.50px] xl:mx-[2px]"
                              />
                              <Text className="absolute font-medium h-[max-content] inset-[0] justify-center m-[auto] xl:text-[5px] lg:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-[9px] text-blue_401 text-left tracking-ls11 w-[max-content]">{`AM`}</Text>
                            </Stack>
                            <Text className="font-medium 2xl:my-[3px] xl:my-[3px] lg:my-[3px] 3xl:my-[4px] my-[5.33px] xl:text-[5px] lg:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-[9px] text-amber_500 text-left tracking-ls11 w-[auto]">{`ES`}</Text>
                          </Row>
                        </Column>
                        <Text className="absolute bottom-[16%] font-normal not-italic opacity-op6963881 right-[0] text-[10px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-gray_600 text-left tracking-ls11 w-[auto]">{`10 attachements`}</Text>
                      </Stack>
                      <Image
                        src={"images/img_pinicon_1.svg"}
                        className="absolute bottom-[18%] xl:h-[5px] lg:h-[5px] 2xl:h-[6px] h-[7.62px] 3xl:h-[7px] object-contain right-[31%] w-[2%]"
                        alt="pinicon"
                      />
                    </Stack>
                  </Column>
                </Column>
              </Stack>
              <Column className="font-mulish items-start justify-start xl:mb-[101px] 2xl:mb-[114px] 3xl:mb-[137px] mb-[156px] lg:mb-[89px] lg:ml-[299px] xl:ml-[342px] 2xl:ml-[385px] 3xl:ml-[462px] ml-[525px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[48px] w-[22%]">
                <Text className="font-extrabold leading-[normal] lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-[48px] text-black_900 text-left w-[86%]">{`Simple task management`}</Text>
                <Text className="font-semibold leading-[normal] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] mt-[30px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-black_900 text-left w-[100%]">{`Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.`}</Text>
                <Column className="lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[34px] w-[100%]">
                  <Row className="items-start justify-start pl-[1px] lg:pr-[200px] xl:pr-[229px] 2xl:pr-[258px] 3xl:pr-[310px] pr-[352px] w-[100%]">
                    <Text className="font-bold xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] mt-[6px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-blue_400 text-left underline w-[auto]">{`Learn more`}</Text>
                    <Image
                      src={"images/img_iconactionarr_1.svg"}
                      className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] mb-[10px] lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] object-contain lg:w-[13px] xl:w-[15px] 2xl:w-[17px] 3xl:w-[21px] w-[24px]"
                      alt="iconactionarr"
                    />
                  </Row>
                </Column>
              </Column>
            </Row>
            <Row className="font-mulish items-start justify-between xl:mt-[104px] 2xl:mt-[117px] 3xl:mt-[140px] mt-[160px] lg:mt-[91px] mx-[auto] w-[72%]">
              <Column className="items-start justify-start 3xl:mb-[103px] mb-[118px] lg:mb-[67px] xl:mb-[77px] 2xl:mb-[86px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] mt-[86px] w-[31%]">
                <Text className="font-extrabold leading-[normal] lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-[48px] text-black_900 text-left w-[86%]">{`Scheduling that actually works`}</Text>
                <Text className="font-semibold leading-[normal] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] mt-[30px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-black_900 text-left w-[100%]">{`Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.`}</Text>
                <Column className="lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[34px] w-[100%]">
                  <Row className="items-start justify-start pl-[1px] lg:pr-[200px] xl:pr-[229px] 2xl:pr-[258px] 3xl:pr-[310px] pr-[352px] w-[100%]">
                    <Text className="font-bold xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] mt-[6px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-blue_400 text-left underline w-[auto]">{`Learn more`}</Text>
                    <Image
                      src={"images/img_iconactionarr_2.svg"}
                      className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] mb-[10px] lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] object-contain lg:w-[13px] xl:w-[15px] 2xl:w-[17px] 3xl:w-[21px] w-[24px]"
                      alt="iconactionarr"
                    />
                  </Row>
                </Column>
              </Column>
              <Stack className="font-roboto lg:h-[324px] xl:h-[371px] 2xl:h-[417px] 3xl:h-[500px] h-[567px] lg:ml-[267px] xl:ml-[306px] 2xl:ml-[344px] 3xl:ml-[413px] ml-[469px] w-[38%]">
                <Image
                  src={"images/img_brookecaglejb_1.png"}
                  className="absolute lg:h-[324px] xl:h-[371px] 2xl:h-[417px] 3xl:h-[500px] h-[567px] inset-[0] object-cover w-[100%]"
                  alt="brookecagleJB"
                />
                <Stack className="absolute lg:h-[174px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] h-[304px] left-[8%] top-[13%] w-[48%]">
                  <div className="absolute bg-white_A700 lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] h-[303px] inset-[0] w-[100%]"></div>
                  <Column className="absolute bottom-[0] inset-x-[0] items-center justify-start mx-[auto] w-[75%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Row className="items-start justify-between mx-[auto] w-[91%]">
                        <Image
                          src={"images/img_arrow.svg"}
                          className="h-[10.29px] 3xl:h-[10px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[7px] mb-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mt-[9.71px] object-contain w-[3%]"
                          alt="arrow"
                        />
                        <Text className="font-normal lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[43px] ml-[49px] not-italic 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-gray_500 text-left w-[auto]">
                          <span className="text-gray_500 font-roboto">
                            <>{`March `}</>
                          </span>
                          <span className="text-gray_500 font-roboto">
                            <>{`2017`}</>
                          </span>
                        </Text>
                        <Image
                          src={"images/img_arrow_1.svg"}
                          className="h-[10.29px] 3xl:h-[10px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[7px] mb-[8px] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] ml-[48px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mt-[9.71px] object-contain w-[3%]"
                          alt="arrow"
                        />
                      </Row>
                      <Row className="items-center justify-between lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[31px] w-[100%]">
                        <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_601 text-left tracking-ls1 w-[auto]">{`MO`}</Text>
                        <Text className="font-bold 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:ml-[9px] text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_601 text-left tracking-ls1 w-[auto]">{`TU`}</Text>
                        <Text className="font-bold 2xl:ml-[10px] 3xl:ml-[12px] ml-[14px] lg:ml-[7px] xl:ml-[9px] text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_601 text-left tracking-ls1 w-[auto]">{`WE`}</Text>
                        <Text className="font-bold ml-[11px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_601 text-left tracking-ls1 w-[auto]">{`TH`}</Text>
                        <Text className="font-bold lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] ml-[18px] text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_601 text-left tracking-ls1 w-[auto]">{`FR`}</Text>
                        <Text className="font-bold 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:ml-[9px] text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_601 text-left tracking-ls1 w-[auto]">{`SA`}</Text>
                        <Text className="font-bold ml-[11px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_601 text-left tracking-ls1 w-[auto]">{`SU`}</Text>
                      </Row>
                    </Column>
                    <Column className="items-center justify-start 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                      <Column className="items-center justify-start xl:pl-[1px] lg:pl-[1px] 3xl:pl-[2px] 2xl:pl-[2px] pl-[3px] w-[100%]">
                        <Stack className="3xl:h-[112px] h-[127px] lg:h-[73px] xl:h-[83px] 2xl:h-[94px] mx-[auto] w-[99%]">
                          <Row className="absolute inset-x-[0] items-center justify-between mx-[auto] top-[6%] w-[99%]">
                            <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_301 text-left tracking-ls1 w-[auto]">{`25`}</Text>
                            <Text className="font-bold lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] ml-[18px] text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_301 text-left tracking-ls1 w-[auto]">{`26`}</Text>
                            <Text className="font-bold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_301 text-left tracking-ls1 w-[auto]">{`27`}</Text>
                            <Text className="font-bold 3xl:ml-[11px] ml-[13px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_301 text-left tracking-ls1 w-[auto]">{`28`}</Text>
                            <Text className="font-bold lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[21px] ml-[24px] text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_301 text-left tracking-ls1 w-[auto]">{`1`}</Text>
                            <Text className="font-bold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] ml-[22px] text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[auto]">{`2`}</Text>
                            <Text className="font-bold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] ml-[20px] text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[auto]">{`3`}</Text>
                          </Row>
                          <Column className="absolute inset-y-[0] items-start justify-start left-[2%] right-[0] w-[98%]">
                            <Column className="bg-blue_400_19 lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[28px] items-center justify-start 2xl:ml-[107px] 3xl:ml-[128px] ml-[146px] lg:ml-[83px] xl:ml-[95px] lg:mr-[12px] xl:mr-[14px] 2xl:mr-[16px] 3xl:mr-[19px] mr-[22px] lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] pb-[18px] xl:pl-[11px] 2xl:pl-[12px] 3xl:pl-[14px] pl-[17px] lg:pl-[9px] xl:pr-[3px] lg:pr-[3px] 2xl:pr-[4px] 3xl:pr-[5px] pr-[6px] lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] pt-[5px] rounded-radius4 lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[28px]">
                              <div className="bg-blue_401 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] h-[5px] rounded-radius100 lg:w-[2px] 2xl:w-[3px] xl:w-[3px] 3xl:w-[4px] w-[5px]"></div>
                            </Column>
                            <Column className="lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[19px] w-[100%]">
                              <Row className="items-center justify-between w-[100%]">
                                <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[auto]">{`4`}</Text>
                                <Text className="font-bold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] ml-[25px] text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[auto]">{`5`}</Text>
                                <Text className="font-bold lg:ml-[13px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] ml-[23px] text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[auto]">{`6`}</Text>
                                <Text className="font-bold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] ml-[20px] text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[auto]">{`7`}</Text>
                                <Text className="font-bold lg:ml-[15px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] ml-[27px] text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[auto]">{`8`}</Text>
                                <Text className="font-bold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] ml-[22px] text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[auto]">{`9`}</Text>
                                <Text className="font-bold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[auto]">{`10`}</Text>
                              </Row>
                            </Column>
                            <Column className="items-start lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] mt-[18px] lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] pl-[21px] 2xl:pr-[107px] 3xl:pr-[129px] pr-[147px] lg:pr-[83px] xl:pr-[95px] w-[100%]">
                              <Column className="bg-gray_100 lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[28px] items-center justify-start xl:pb-[11px] 2xl:pb-[12px] 3xl:pb-[14px] pb-[17px] lg:pb-[9px] lg:pl-[10px] xl:pl-[12px] 2xl:pl-[13px] 3xl:pl-[16px] pl-[19px] 2xl:pr-[2px] xl:pr-[2px] lg:pr-[2px] 3xl:pr-[3px] pr-[4px] xl:pt-[3px] lg:pt-[3px] 2xl:pt-[4px] 3xl:pt-[5px] pt-[6px] rounded-radius4 lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[28px]">
                                <div className="bg-deep_orange_400 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] h-[5px] rounded-radius100 lg:w-[2px] 2xl:w-[3px] xl:w-[3px] 3xl:w-[4px] w-[5px]"></div>
                              </Column>
                            </Column>
                            <div className="bg-blue_401 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] h-[5px] xl:ml-[108px] 2xl:ml-[121px] 3xl:ml-[146px] ml-[166px] lg:ml-[94px] lg:mr-[14px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[22px] mr-[25px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius100 lg:w-[2px] 2xl:w-[3px] xl:w-[3px] 3xl:w-[4px] w-[5px]"></div>
                          </Column>
                          <Row className="absolute bottom-[22%] lg:gap-[10px] xl:gap-[11px] 2xl:gap-[13px] 3xl:gap-[15px] gap-[18px] grid grid-cols-7 items-center justify-between w-[100%]">
                            <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`11`}</Text>
                            <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`12`}</Text>
                            <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`13`}</Text>
                            <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`14`}</Text>
                            <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`15`}</Text>
                            <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`16`}</Text>
                            <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`17`}</Text>
                          </Row>
                        </Stack>
                        <Row className="lg:gap-[10px] xl:gap-[11px] 2xl:gap-[13px] 3xl:gap-[15px] gap-[18px] grid grid-cols-7 items-center justify-between mx-[auto] w-[99%]">
                          <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`18`}</Text>
                          <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`19`}</Text>
                          <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`20`}</Text>
                          <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`21`}</Text>
                          <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`22`}</Text>
                          <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`23`}</Text>
                          <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`24`}</Text>
                        </Row>
                      </Column>
                      <Row className="lg:gap-[10px] xl:gap-[11px] 2xl:gap-[13px] 3xl:gap-[15px] gap-[18px] grid grid-cols-7 items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] mt-[26px] mx-[auto] w-[99%]">
                        <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`25`}</Text>
                        <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`26`}</Text>
                        <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`27`}</Text>
                        <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`28`}</Text>
                        <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`29`}</Text>
                        <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`30`}</Text>
                        <Text className="font-bold text-[11px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_501 text-left tracking-ls1 w-[100%]">{`31`}</Text>
                      </Row>
                    </Column>
                    <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] mt-[26px] mx-[auto] w-[98%]" />
                  </Column>
                </Stack>
              </Stack>
            </Row>
          </Column>
          <Text className="font-extrabold font-mulish lg:ml-[244px] xl:ml-[279px] 2xl:ml-[314px] 3xl:ml-[376px] ml-[428px] xl:mt-[104px] 2xl:mt-[117px] 3xl:mt-[140px] mt-[160px] lg:mt-[91px] lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-[48px] text-black_900 text-left w-[auto]">{`What people say about us`}</Text>
          <Column className="font-mulish items-center 3xl:mt-[103px] mt-[118px] lg:mt-[67px] xl:mt-[77px] 2xl:mt-[86px] lg:pl-[37px] xl:pl-[43px] 2xl:pl-[48px] 3xl:pl-[58px] pl-[66px] w-[100%]">
            <List
              className="lg:gap-[25px] xl:gap-[28px] 2xl:gap-[32px] 3xl:gap-[38px] gap-[44px] grid grid-cols-5 min-h-[auto] mx-[auto] w-[97%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 items-start justify-start mb-[1px] lg:pb-[22px] xl:pb-[26px] 2xl:pb-[29px] 3xl:pb-[35px] pb-[40px] lg:pt-[17px] xl:pt-[19px] 2xl:pt-[22px] 3xl:pt-[26px] pt-[30px] shadow-bs7 w-[100%]">
                <Stack className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] ml-[30px] w-[33%]">
                  <Image
                    src={"images/img_stars.svg"}
                    className="absolute lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] inset-[0] object-cover w-[100%]"
                    alt="Stars"
                  />
                  <Image
                    src={"images/img_stars_1.svg"}
                    className="absolute lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] inset-[0] object-cover w-[100%]"
                    alt="Stars"
                  />
                </Stack>
                <Text className="font-semibold leading-[normal] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[20px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-black_900 text-left w-[80%]">{`Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.`}</Text>
                <Column className="font-roboto lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] mt-[50px] w-[100%]">
                  <Row className="items-center justify-start lg:pl-[22px] xl:pl-[26px] 2xl:pl-[29px] 3xl:pl-[35px] pl-[40px] 2xl:pr-[106px] 3xl:pr-[127px] pr-[145px] lg:pr-[82px] xl:pr-[94px] w-[100%]">
                    <Image
                      src={"images/img_ellipse_7.png"}
                      className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] h-[56px] object-contain rounded-radius501 w-[auto]"
                      alt="Ellipse"
                    />
                    <Text className="font-semibold xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[14px] mb-[17px] lg:mb-[9px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] ml-[20px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-black_900 text-left w-[auto]">{`Amy Klassen`}</Text>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-start justify-start mb-[1px] lg:pb-[22px] xl:pb-[26px] 2xl:pb-[29px] 3xl:pb-[35px] pb-[40px] lg:pt-[17px] xl:pt-[19px] 2xl:pt-[22px] 3xl:pt-[26px] pt-[30px] shadow-bs7 w-[100%]">
                <Stack className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] ml-[30px] w-[33%]">
                  <Image
                    src={"images/img_stars_2.svg"}
                    className="absolute lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] inset-[0] object-cover w-[100%]"
                    alt="Stars"
                  />
                  <Image
                    src={"images/img_stars_3.svg"}
                    className="absolute lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] inset-[0] object-cover w-[100%]"
                    alt="Stars"
                  />
                </Stack>
                <Text className="font-semibold leading-[normal] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[20px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-black_900 text-left w-[80%]">{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`}</Text>
                <Column className="font-roboto lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] mt-[50px] w-[100%]">
                  <Row className="items-center justify-start lg:pl-[22px] xl:pl-[26px] 2xl:pl-[29px] 3xl:pl-[35px] pl-[40px] 2xl:pr-[107px] 3xl:pr-[129px] pr-[147px] lg:pr-[83px] xl:pr-[95px] w-[100%]">
                    <Image
                      src={"images/img_ellipse_8.png"}
                      className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] h-[56px] object-contain rounded-radius501 w-[auto]"
                      alt="Ellipse"
                    />
                    <Text className="font-semibold xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[14px] mb-[17px] lg:mb-[9px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] ml-[20px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-black_900 text-left w-[auto]">{`Jane Cooper`}</Text>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-start justify-start mt-[1px] lg:pb-[22px] xl:pb-[26px] 2xl:pb-[29px] 3xl:pb-[35px] pb-[40px] lg:pt-[17px] xl:pt-[19px] 2xl:pt-[22px] 3xl:pt-[26px] pt-[30px] shadow-bs7 w-[100%]">
                <Stack className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] ml-[30px] w-[33%]">
                  <Image
                    src={"images/img_stars_4.svg"}
                    className="absolute lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] inset-[0] object-cover w-[100%]"
                    alt="Stars"
                  />
                  <Image
                    src={"images/img_stars_5.svg"}
                    className="absolute lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] inset-[0] object-cover w-[100%]"
                    alt="Stars"
                  />
                </Stack>
                <Text className="font-semibold leading-[normal] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[20px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-black_900 text-left w-[80%]">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.`}</Text>
                <Column className="font-roboto lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] mt-[50px] w-[100%]">
                  <Row className="items-center justify-start lg:pl-[22px] xl:pl-[26px] 2xl:pl-[29px] 3xl:pl-[35px] pl-[40px] 2xl:pr-[104px] 3xl:pr-[125px] pr-[143px] lg:pr-[81px] xl:pr-[93px] w-[100%]">
                    <Image
                      src={"images/img_ellipse_9.png"}
                      className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] h-[56px] object-contain rounded-radius501 w-[auto]"
                      alt="Ellipse"
                    />
                    <Text className="font-semibold xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[14px] mb-[17px] lg:mb-[9px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] ml-[20px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-black_900 text-left w-[auto]">{`Eleanor Pena`}</Text>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-start justify-start mt-[1px] lg:pb-[22px] xl:pb-[26px] 2xl:pb-[29px] 3xl:pb-[35px] pb-[40px] lg:pt-[17px] xl:pt-[19px] 2xl:pt-[22px] 3xl:pt-[26px] pt-[30px] shadow-bs7 w-[100%]">
                <Stack className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] ml-[30px] w-[33%]">
                  <Image
                    src={"images/img_stars_6.svg"}
                    className="absolute lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] inset-[0] object-cover w-[100%]"
                    alt="Stars"
                  />
                  <Image
                    src={"images/img_stars_7.svg"}
                    className="absolute lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] inset-[0] object-cover w-[100%]"
                    alt="Stars"
                  />
                </Stack>
                <Text className="font-semibold leading-[normal] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[20px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-black_900 text-left w-[80%]">{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`}</Text>
                <Column className="font-roboto lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] mt-[50px] w-[100%]">
                  <Row className="items-center justify-start lg:pl-[22px] xl:pl-[26px] 2xl:pl-[29px] 3xl:pl-[35px] pl-[40px] 2xl:pr-[106px] 3xl:pr-[127px] pr-[145px] lg:pr-[82px] xl:pr-[94px] w-[100%]">
                    <Image
                      src={"images/img_ellipse_10.png"}
                      className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] h-[56px] object-contain rounded-radius501 w-[auto]"
                      alt="Ellipse"
                    />
                    <Text className="font-semibold xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[14px] mb-[17px] lg:mb-[9px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] ml-[20px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-black_900 text-left w-[auto]">{`Amy Klassen`}</Text>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-start justify-start mb-[1px] lg:pb-[22px] xl:pb-[26px] 2xl:pb-[29px] 3xl:pb-[35px] pb-[40px] lg:pt-[17px] xl:pt-[19px] 2xl:pt-[22px] 3xl:pt-[26px] pt-[30px] shadow-bs7 w-[100%]">
                <Stack className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] ml-[30px] w-[33%]">
                  <Image
                    src={"images/img_stars_8.svg"}
                    className="absolute lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] inset-[0] object-cover w-[100%]"
                    alt="Stars"
                  />
                  <Image
                    src={"images/img_stars_9.svg"}
                    className="absolute lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[24px] inset-[0] object-cover w-[100%]"
                    alt="Stars"
                  />
                </Stack>
                <Text className="font-semibold leading-[normal] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[20px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-black_900 text-left w-[80%]">{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`}</Text>
                <Column className="font-roboto lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] mt-[50px] w-[100%]">
                  <Row className="items-center justify-start lg:pl-[22px] xl:pl-[26px] 2xl:pl-[29px] 3xl:pl-[35px] pl-[40px] 2xl:pr-[106px] 3xl:pr-[127px] pr-[145px] lg:pr-[82px] xl:pr-[94px] w-[100%]">
                    <Image
                      src={"images/img_ellipse_11.png"}
                      className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] h-[56px] object-contain rounded-radius501 w-[auto]"
                      alt="Ellipse"
                    />
                    <Text className="font-semibold xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[14px] mb-[17px] lg:mb-[9px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] ml-[20px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-black_900 text-left w-[auto]">{`Amy Klassen`}</Text>
                  </Row>
                </Column>
              </Column>
            </List>
          </Column>
          <Column className="bg-indigo_900 items-start justify-end 2xl:mt-[110px] 3xl:mt-[132px] mt-[150px] lg:mt-[85px] xl:mt-[97px] lg:pb-[11px] xl:pb-[13px] 2xl:pb-[14px] 3xl:pb-[17px] pb-[20px] lg:pt-[50px] xl:pt-[57px] 2xl:pt-[65px] 3xl:pt-[78px] pt-[88.79px] w-[94%]">
            <Column className="font-merriweather items-center lg:pl-[129px] xl:pl-[147px] 2xl:pl-[166px] 3xl:pl-[199px] pl-[226.29px] lg:pr-[128px] xl:pr-[146px] 2xl:pr-[165px] 3xl:pr-[198px] pr-[224.93px] w-[100%]">
              <Row className="items-start justify-end mx-[auto] w-[77%]">
                <Column className="items-start justify-start w-[12%]">
                  <Text className="font-black lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-[36px] text-gray_200 text-left w-[auto]">{`Laos`}</Text>
                  <Column className="font-publicsans lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.79px] w-[100%]">
                    <Row className="items-start justify-start w-[100%]">
                      <Image
                        src={"images/img_heart31_5.svg"}
                        className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] h-[29.11px] object-contain w-[16%]"
                        alt="heart31"
                      />
                      <Text className="font-medium lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[7px] mb-[8.11px] 2xl:ml-[10px] 3xl:ml-[12px] ml-[13.64px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-left text-white_A700 w-[auto]">{`Build with heart`}</Text>
                    </Row>
                  </Column>
                </Column>
                <Row className="font-publicsans items-center justify-center lg:mb-[25px] xl:mb-[29px] 2xl:mb-[32px] 3xl:mb-[39px] mb-[44.5px] lg:ml-[166px] xl:ml-[190px] 2xl:ml-[213px] 3xl:ml-[256px] ml-[291.31px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[32px] mt-[36.4px] w-[41%]">
                  <Text className="font-light lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-left text-white_A700 w-[auto]">{`Home`}</Text>
                  <Text className="font-light lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[76px] ml-[86.32px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-left text-white_A700 w-[auto]">{`Podcast`}</Text>
                  <Row className="items-center justify-between lg:ml-[52px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] ml-[92.86px] w-[52%]">
                    <Text className="font-light lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-left text-white_A700 w-[auto]">{`Blog`}</Text>
                    <Text className="font-light lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[82.32px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-left text-white_A700 w-[auto]">{`About`}</Text>
                    <Text className="font-light lg:ml-[49px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[76px] ml-[86.69px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-left text-white_A700 w-[auto]">{`Contact`}</Text>
                  </Row>
                </Row>
                <Column className="font-publicsans items-center justify-start mb-[1px] lg:ml-[152px] xl:ml-[173px] 2xl:ml-[195px] 3xl:ml-[234px] ml-[266.63px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4.37px] w-[10%]">
                  <Text className="font-bold mx-[auto] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-[18px] text-center text-white_A700 w-[auto]">{`Follow Me on`}</Text>
                  <Image
                    src={"images/img_group94_5.svg"}
                    className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] h-[36.39px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38.68px] object-cover w-[100%]"
                    alt="Group94"
                  />
                </Column>
              </Row>
            </Column>
            <Text className="font-light font-publicsans lg:ml-[453px] xl:ml-[518px] 2xl:ml-[583px] 3xl:ml-[700px] ml-[794.74px] lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] mt-[96.07px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px] text-left text-white_A700 w-[auto]">{`Powered by Majengkarya - Premium Theme`}</Text>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default AboutUsPage;
