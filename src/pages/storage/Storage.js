import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineHeart, HiHeart } from "react-icons/hi"; // player like

const StyledStorage = styled.div`
  display: flex;
  align-items: flex;
  justify-content: center;

  .storage-inner-box {
    padding-top: 150px;
    font-family: "NanumBarunGothic", sans-serif;
    width: 1280px;

    .menu-list {
      display: flex;
      align-items: center;
      height: 38px;
      border-bottom: 1.5px solid #eeeeee;

      .selected-list {
        display: flex;
        align-items: center;
        height: 40px;
        padding: 10px;
        color: #3f3fff;
        border-bottom: 2px solid #3f3fff;
        font-weight: 700;
        cursor: pointer;

        .icon {
          margin-right: 2px;
        }
      }

      .list {
        display: flex;
        align-items: center;
        height: 40px;
        margin: 0 10px;
        cursor: pointer;

        &:hover {
          color: #3f3fff;
        }

        .icon {
          margin-right: 2px;
        }
      }
    }
  }
`;

const Storage = () => {
  const [isMyListClicked, setIsMyListClicked] = useState(true);
  const [isLikedClicked, setIsLikedClicked] = useState(false);
  const [isMostListenClicked, setIsMostListenClicked] = useState(false);
  const [isRecentlyListenClicked, setIsRecentlyListenClicked] = useState(false);
  return (
    <StyledStorage>
      <div className="storage-inner-box">
        <ul className="menu-list">
          <li>
            <NavLink
              to="/storage/mylist"
              className={isMyListClicked ? "selected-list" : "list"}
              onClick={() => {
                setIsMyListClicked(true);
                setIsLikedClicked(false);
                setIsMostListenClicked(false);
                setIsRecentlyListenClicked(false);
              }}
            >
              내 리스트
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/storage/liketrack"
              className={isLikedClicked ? "selected-list" : "list"}
              onClick={() => {
                setIsMyListClicked(false);
                setIsLikedClicked(true);
                setIsMostListenClicked(false);
                setIsRecentlyListenClicked(false);
              }}
            >
              <HiOutlineHeart className="icon" size="18" />
              좋아요
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/storage/mostlisten"
              className={isMostListenClicked ? "selected-list" : "list"}
              onClick={() => {
                setIsMyListClicked(false);
                setIsLikedClicked(false);
                setIsMostListenClicked(true);
                setIsRecentlyListenClicked(false);
              }}
            >
              많이 들은 곡
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/storage/recentlylisten"
              className={isRecentlyListenClicked ? "selected-list" : "list"}
              onClick={() => {
                setIsMyListClicked(false);
                setIsLikedClicked(false);
                setIsMostListenClicked(false);
                setIsRecentlyListenClicked(true);
              }}
            >
              최근 감상
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </StyledStorage>
  );
};

export default Storage;