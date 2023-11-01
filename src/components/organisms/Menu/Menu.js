import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../../store/slices/search-slice";

import classes from "./Menu.module.css";

// import MenuSection from "../../atoms/MenuSection/MenuSection";
import Text from "../../atoms/Text/Text";
// import Divider from "../../atoms/Divider/Divider";
import Button from "../../molecules/Button/Button";
import Input from "../../molecules/Input/Input";

import useHttp from "../../../hooks/use-http";

import {
  BiArrowBack,
  BiDotsHorizontalRounded,
  // BiLeftArrowAlt,
  BiMenu,
} from "react-icons/bi";

const Menu = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const searchValue = useSelector((state) => state.searchState.search);

  const [genreButtons, setGenreButtons] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuClosing, setMobileMenuClosing] = useState(false);
  const { sendRequest: fetchGenres } = useHttp();

  const discoverButtons = [
    {
      section: "popular",
      link: "/popular/?page=1",
      text: "Popular",
    },
    {
      section: "trending",
      link: "/trending/?page=1",
      text: "Trending",
    },
    {
      section: "top-rated",
      link: "/top-rated/?page=1",
      text: "Top Rated",
    },
  ];

  const getButtonClasses = (buttonLink, classNames) => {
    // buttonLink without page "/1 or /2 or /30" and with spaces replaced with "%20"
    const finalButtonLink = buttonLink
      .replace(" ", "%20")
      .toLowerCase()
      .split("/", 2)
      .join("/");

    // locationLink without page
    const finalLocationLink = location.pathname.split("/", 2).join("/");

    if (finalLocationLink === finalButtonLink) {
      return `${classNames} active no-animate`;
    } else {
      return classNames;
    }
  };

  const handleMobileMenuClose = () => {
    setMobileMenuClosing(true);
    setTimeout(() => {
      setMobileMenuClosing(false);
      setMobileMenuOpen(false);
    }, 500);
  };

  const handleMobileMenuButtonClick = (buttonLink) => {
    if (props.isMobile) {
      handleMobileMenuClose();
    }
    navigate(buttonLink);
  };

  const handleSearch = (event) => {
    dispatch(searchActions.search(event.target.value));
    dispatch(searchActions.setDirty(true)); // when "touching" the search input, set isDirty to true
  };

  useEffect(() => {
    fetchGenres({ url: "genre/movie/list" }, (data) => {
      setGenreButtons(
        data.genres.map((genre) => ({
          id: genre.id,
          section: genre.name.toLowerCase(),
          link: `/genre-${genre.name.toLowerCase()}/?page=1`,
          text: genre.name,
        }))
      );
    });
  }, [fetchGenres]);

  // return (
  //   <>
  //     <nav
  //       className={`${classes["menu-container"]} ${
  //         props.isMobile && !mobileMenuOpen ? classes["small-screen"] : ""
  //       } ${mobileMenuOpen && !mobileMenuClosing ? classes["slide-in"] : ""}  ${
  //         mobileMenuClosing ? classes["slide-out"] : ""
  //       }`}
  //     >
  //       {props.isMobile && !mobileMenuOpen ? (
  //         <>
  //           <MenuSection className={"mt-4"}>
  //             <Button
  //               className="active centered-text no-animate"
  //               width="40px"
  //               height="40px"
  //               paddingLeft="0"
  //               backgroundColor={"var(--dark-blue)"}
  //               color="white"
  //               fontSize="25px"
  //               onClick={() => setMobileMenuOpen(true)}
  //             >
  //               <BiMenu />
  //             </Button>
  //           </MenuSection>
  //         </>
  //       ) : (
  //         <>
  //           {props.isMobile && (
  //             <Button
  //               className={`active centered-text no-animate ${classes["close-menu"]}`}
  //               width="40px"
  //               height="40px"
  //               paddingLeft="0"
  //               backgroundColor={"var(--dark-blue"}
  //               color="white"
  //               fontSize="25px"
  //               onClick={handleMobileMenuClose}
  //             >
  //               <BiLeftArrowAlt />
  //             </Button>
  //           )}
  //           <Divider width="130px" className="mt-2 centered" />
  //           <MenuSection>
  //             <Text
  //               className="mt-3 centered"
  //               width="130px"
  //               display="block"
  //               color="#fff"
  //               fontSize="12px"
  //             >
  //               Discover
  //             </Text>
  //             {discoverButtons.map((button) => (
  //               <Button
  //                 key={button.section}
  //                 className={getButtonClasses(
  //                   button.link,
  //                   "centered block mt-1 box-shadow"
  //                 )}
  //                 onClick={() => handleMobileMenuButtonClick(button.link)}
  //               >
  //                 {button.text}
  //               </Button>
  //             ))}
  //           </MenuSection>
  //           <MenuSection>
  //             <Text
  //               className="mt-3 centered"
  //               width="130px"
  //               display="block"
  //               color="#fff"
  //               fontSize="12px"
  //             >
  //               Genres
  //             </Text>
  //             {genreButtons.map((button) => (
  //               <Button
  //                 key={button.section}
  //                 className={getButtonClasses(
  //                   button.link,
  //                   "centered block mt-1 box-shadow"
  //                 )}
  //                 onClick={() => handleMobileMenuButtonClick(button.link)}
  //               >
  //                 {button.text}
  //               </Button>
  //             ))}
  //           </MenuSection>
  //         </>
  //       )}
  //     </nav>
  //     {props.isMobile && mobileMenuOpen && !mobileMenuClosing && (
  //       <div className={classes.backdrop} onClick={handleMobileMenuClose}></div>
  //     )}
  //   </>
  // );

  return (
    <nav className={classes["menu-container"]}>
      <div>
        {props.backButton ? (
          <Button
            theme="no-background"
            size="xl"
            onClick={() => navigate(-1)}
          >
            <BiArrowBack />
          </Button>
        ) : (
          <Button
            theme="no-background"
            size="xl"
            onClick={() => setMobileMenuOpen(true)}
          >
            <BiMenu />
          </Button>
        )}

        <Link to={'/popular/'}>
          <Text as="h1" fontSize={"18px"} fontWeight="700">
            React Movies App
          </Text>
        </Link>
      </div>
      <div>
        <Input
          className={classes["menu-input"]}
          placeholder="Search for a movie..."
          defaultExpanded={searchValue !== ''}
          value={searchValue}
          onChange={handleSearch}
        />
        <Button theme="no-background" size="xl">
          <BiDotsHorizontalRounded />
        </Button>
      </div>
    </nav>
  );
};

export default Menu;
