import React, { useState } from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingBag,
  faChartBar,
  faGem,
} from "@fortawesome/free-solid-svg-icons";

import {
  GlobalStyle,
  Container,
  Section,
  Subsection,
  Title,
  Subtitle,
  Text,
  Button,
  Menu,
  Logo,
  MenuList,
  MenuListItem,
  MenuListMobile,
  Home,
  HomeImage,
  AboutImage,
  AboutItems,
  AboutItem,
  AboutItemIcon,
  AboutItemInfos,
  AboutItemTitle,
  AboutItemDescriptionList,
  AboutItemDescription,
  CompaniesList,
  CompaniesListItem,
  CompaniesListItemImage,
  VoucherModal,
  VoucherMonthBonus,
  MonthList,
  MonthItem,
  Bonus,
  TooltipRange,
  InputRange,
  LabelRangeValuesList,
  LabelRangeValue,
  Footer,
} from "./styles";
import { Modal } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const scrollPage = (target) => {
    const element = document.getElementById(target);
    window.scrollTo(0, element.offsetTop - 100);
    const links = document.getElementsByTagName("a");
    Object.keys(links).map((link) => {
      if (links[link].id === `${target}Link`) {
        links[link].classList.add("active");
      } else {
        links[link].classList.remove("active");
      }
    });
  };

  const handleClick = (e) => {
    const links = document.getElementsByTagName("a");
    Object.keys(links).map((link) => {
      links[link].classList.remove("active");
    });
    e.target.classList.add("active");
  };

  const [rangeValue, setRangeValue] = useState(10);

  const handleChange = (value) => {
    setRangeValue(value);
  };

  const options = [10, 1000];

  return (
    <>
      <Menu>
        <a
          href="http://bit.ly/megahack-covid19-economia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo />
        </a>
        <MenuList>
          <MenuListItem>
            <AnchorLink
              offset="100"
              href="#home"
              id="homeLink"
              className="active"
              onClick={(e) => handleClick(e)}
            >
              Início
            </AnchorLink>
          </MenuListItem>
          <MenuListItem>
            <AnchorLink
              offset="100"
              href="#about"
              id="aboutLink"
              onClick={(e) => handleClick(e)}
            >
              Sobre
            </AnchorLink>
          </MenuListItem>
          <MenuListItem>
            <AnchorLink
              offset="100"
              href="#companies"
              id="companiesLink"
              onClick={(e) => handleClick(e)}
            >
              Empresas
            </AnchorLink>
          </MenuListItem>
        </MenuList>
        <MenuListMobile>
          <FontAwesomeIcon icon={faBars} />
        </MenuListMobile>
      </Menu>

      <Modal show={show} onHide={handleClose}>
        <VoucherModal>
          <Text>1. Escolha o mês para poder usar seu voucher</Text>
          <VoucherMonthBonus>
            <MonthList>
              <MonthItem>Maio 2020</MonthItem>
              <MonthItem>Junho 2020</MonthItem>
              <MonthItem>Julho 2020</MonthItem>
              <MonthItem>Agosto 2020</MonthItem>
              <MonthItem>Setembro 2020</MonthItem>
              <MonthItem>Outubro 2020</MonthItem>
              <MonthItem>Novembro 2020</MonthItem>
              <MonthItem>Dezembro 2020</MonthItem>
            </MonthList>
            <Bonus>
              <FontAwesomeIcon icon={faGem} />
              <Text>Bônus</Text>
              <Text id="bonusPercentage">
                {`${parseInt((rangeValue / 100) * 3.7)}%`}
              </Text>
            </Bonus>
          </VoucherMonthBonus>
          <Text>2. Escolha um valor para seu voucher</Text>
          <TooltipRange options={options} rangeValue={rangeValue}>
            {`R$${rangeValue}`}
          </TooltipRange>
          <InputRange
            name="range"
            values={options}
            title={rangeValue}
            value={rangeValue}
            onChange={(event) => handleChange(parseInt(event.target.value))}
          />
          <LabelRangeValuesList>
            {options.map((option, index) => {
              return (
                <LabelRangeValue
                  key={index}
                  onClick={() => handleChange(option)}
                >
                  {`R$${option}`}
                </LabelRangeValue>
              );
            })}
          </LabelRangeValuesList>
        </VoucherModal>
      </Modal>

      <Container>
        <Home>
          <Section id="home">
            <div className="row">
              <div className="col-lg-6 col-12 text-lg-left text-center">
                <Title>
                  Sua empresa <span>presente</span> pode garantir o{" "}
                  <span>futuro</span> de pequenos negócios!
                </Title>
                <Button onClick={() => scrollPage("companies")}>
                  Empresas
                </Button>
              </div>
              <div className="col-lg-6 d-lg-flex d-none justify-content-center align-items-center">
                <HomeImage />
              </div>
            </div>
          </Section>
        </Home>
        <Section id="about">
          <Subsection>
            <Subtitle>Sobre o Mercado Futuro</Subtitle>
            <Text>
              Plataforma em que os pequenos negócios podem levantar saldo para
              capital através da venda de vouchers pré-pagos com bonificação aos
              seus clientes.
            </Text>
          </Subsection>
          <div className="row mt-5">
            <div className="col-lg-6 col-12">
              <Text>Por que escolher um mercado futuro?</Text>
              <AboutItems>
                <AboutItem>
                  <AboutItemIcon>
                    <FontAwesomeIcon icon={faShoppingBag} />
                  </AboutItemIcon>
                  <AboutItemInfos>
                    <AboutItemTitle>Para os clientes:</AboutItemTitle>
                    <AboutItemDescriptionList>
                      <AboutItemDescription>
                        Ajudar e valorizar os negócios locais;
                      </AboutItemDescription>
                      <AboutItemDescription>
                        Programar compras futuras;
                      </AboutItemDescription>
                      <AboutItemDescription>
                        Ganhar bônus superiores ao rendimento da poupança em
                        suas compras.
                      </AboutItemDescription>
                    </AboutItemDescriptionList>
                  </AboutItemInfos>
                </AboutItem>
                <AboutItem>
                  <AboutItemIcon>
                    <FontAwesomeIcon icon={faChartBar} />
                  </AboutItemIcon>
                  <AboutItemInfos>
                    <AboutItemTitle>Para as empresas:</AboutItemTitle>
                    <AboutItemDescriptionList>
                      <AboutItemDescription>
                        Acesso a dinheiro rápido, menos burocrático e mais
                        barato que em bancos.
                      </AboutItemDescription>
                    </AboutItemDescriptionList>
                  </AboutItemInfos>
                </AboutItem>
              </AboutItems>
            </div>
            <div className="col-lg-6 d-lg-flex d-none justify-content-center align-items-center">
              <AboutImage />
            </div>
          </div>
        </Section>
        <Section id="companies">
          <Subsection>
            <Subtitle>Empresas</Subtitle>
            <Text>Conheça as empresas participantes.</Text>
            <Text>
              Selecione uma das empresas listadas abaixo para adquirir seu
              bônus!
            </Text>
          </Subsection>
          <CompaniesList>
            <CompaniesListItem onClick={handleShow}>
              <CompaniesListItemImage src="myob.png" alt="myob" title="myob" />
            </CompaniesListItem>
            <CompaniesListItem onClick={handleShow}>
              <CompaniesListItemImage
                src="belimo.png"
                alt="belimo"
                title="belimo"
              />
            </CompaniesListItem>
            <CompaniesListItem onClick={handleShow}>
              <CompaniesListItemImage
                src="life-groups.png"
                alt="life-groups"
                title="life-groups"
              />
            </CompaniesListItem>
            <CompaniesListItem onClick={handleShow}>
              <CompaniesListItemImage
                src="lilly.png"
                alt="lilly"
                title="lilly"
              />
            </CompaniesListItem>
            <CompaniesListItem onClick={handleShow}>
              <CompaniesListItemImage
                src="citrus.png"
                alt="citrus"
                title="citrus"
              />
            </CompaniesListItem>
            <CompaniesListItem onClick={handleShow}>
              <CompaniesListItemImage
                src="trustly.png"
                alt="trustly"
                title="trustly"
              />
            </CompaniesListItem>
            <CompaniesListItem onClick={handleShow}>
              <CompaniesListItemImage
                src="oldendorff.png"
                alt="oldendorff"
                title="oldendorff"
              />
            </CompaniesListItem>
            <CompaniesListItem onClick={handleShow}>
              <CompaniesListItemImage
                src="grabyo.png"
                alt="grabyo"
                title="grabyo"
              />
            </CompaniesListItem>
          </CompaniesList>
        </Section>
      </Container>
      <Container>
        <Section>
          <Footer>
            © Copyright 2020 Time 25 - MegaHack COVID-19 - Todos os direitos
            reservados.
          </Footer>
        </Section>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
