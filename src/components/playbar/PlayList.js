import styled from "styled-components";
import { useState } from "react";
import { IoSearchSharp, IoFileTrayOutline } from "react-icons/io5";
import { RiPlayListFill } from "react-icons/ri";
import { BiMicrophone } from "react-icons/bi";
import { FiMusic } from "react-icons/fi";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

import PlayListMusic from "./PlayListMusic";

const StyledPlayList = styled.div`
  .play-list-inner-box {
    flex-direction: column;
    width: 670px;
    padding: 30px 0;
    font-size: 18px;

    .menu-list {
      display: flex;
      .menu {
        height: 50px;
        width: calc(670px / 3);
        border-bottom: 3px solid #464646;
        cursor: pointer;
      }
      .selected-menu {
        height: 50px;
        width: calc(670px / 3);
        border-bottom: 3px solid;
        cursor: pointer;
      }
      .icon {
        margin-right: 10px;
      }
    }

    .play-list-menu {
      justify-content: space-between;
      margin-top: 30px;
      height: 40px;
      width: 670px;
      color: #85a0a0;
      font-size: 16px;

      .menu {
        margin: 0 10px;
        cursor: pointer;

        .icon {
          margin-right: 5px;
        }
      }
    }

    .play-list-search {
      position: relative;
      justify-content: space-between;
      margin-top: 30px;
      height: 40px;
      width: 670px;
      color: #85a0a0;
      font-size: 16px;

      .input-box {
        input[type="text"] {
          position: relative;
          left: -17px;
          width: 500px;
          height: 40px;
          border-radius: 100px;
          padding: 10px;
          padding-left: 40px;
          border: none;
          background-color: #313131;
          color: white;
          font-family: "NanumBarunGothic", sans-serif;
          font-size: 16px;
        }

        svg {
          position: relative;
          top: 5.5px;
          left: 15px;
          z-index: 3;
        }
      }

      .cancel {
        margin: 0 10px;
        cursor: pointer;
      }
    }

    .music-container {
      flex-direction: column;
      justify-content: flex-start;
      width: 670px;
      margin-top: 15px;
      border-radius: 7.5px;
      background-color: #181818;

      .play-list-title {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 22.5px;
        font-size: 18px;
        border-bottom: 1px solid #262626;

        .button {
          color: #85a0a0;
          transform: scale(1.25);
          cursor: pointer;
        }
      }

      .play-list-music-container {
        margin: 10px 0;
      }
    }
  }
`;

const PlayList = ({ musicTracks, setMusicTracks, setTrackIndex }) => {
  const [isPlayListClicked, setIsPlayListClicked] = useState(true);
  const [isArtistClicked, setIsArtistClicked] = useState(false);
  const [isSimilarClicked, setIsSimilarClicked] = useState(false);
  const [isPlayListOpened, setIsPlayListOpened] = useState(true);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const filteredTracks = musicTracks.filter((el) => {
    return el.name
      .replace(/(\s*)/g, "")
      .toUpperCase()
      .includes(inputValue.replace(/(\s*)/g, "").toUpperCase());
  });

  return (
    <StyledPlayList>
      <div className="play-list-inner-box flex-center">
        <div className="menu-list">
          <div
            className={
              isPlayListClicked
                ? "selected-menu flex-center"
                : "menu flex-center"
            }
            onClick={() => {
              setIsPlayListClicked(true);
              setIsArtistClicked(false);
              setIsSimilarClicked(false);
              setIsSearchClicked(false);
            }}
          >
            <RiPlayListFill className="icon" size="20" />
            재생목록
          </div>
          <div
            className={
              isArtistClicked ? "selected-menu flex-center" : "menu flex-center"
            }
            onClick={() => {
              setIsPlayListClicked(false);
              setIsArtistClicked(true);
              setIsSimilarClicked(false);
              setIsSearchClicked(false);
            }}
          >
            <BiMicrophone className="icon" size="20" />
            아티스트
          </div>
          <div
            className={
              isSimilarClicked
                ? "selected-menu flex-center"
                : "menu flex-center"
            }
            onClick={() => {
              setIsPlayListClicked(false);
              setIsArtistClicked(false);
              setIsSimilarClicked(true);
              setIsSearchClicked(false);
            }}
          >
            <FiMusic className="icon" size="20" />
            유사곡
          </div>
        </div>
        {isSearchClicked || (
          <div className="play-list-menu flex-center">
            <div className="menu-wrapper flex-center">
              <div
                className="menu flex-center"
                onClick={() => setIsSearchClicked(true)}
              >
                <IoSearchSharp size="18" className="icon" />
                검색
              </div>

              {!isPlayListClicked || (
                <div className="menu flex-center">
                  <IoFileTrayOutline size="18" className="icon" />내 리스트
                  가져오기
                </div>
              )}
            </div>

            <div className="menu-wrapper flex-center">
              {!isPlayListClicked || <div className="menu">편집</div>}
            </div>
          </div>
        )}
        {!isSearchClicked || (
          <div className="play-list-search flex-center">
            <div className="input-box">
              <IoSearchSharp size="20" />
              <input
                type="text"
                placeholder={
                  isPlayListClicked
                    ? "재생목록에서 검색해주세요"
                    : "하단의 곡 리스트에서 검색해주세요"
                }
                autoComplete="off"
                onChange={(e) => {
                  setInputValue(e.target.value);
                  console.log(inputValue);
                }}
              />
            </div>

            <div className="cancel" onClick={() => setIsSearchClicked(false)}>
              취소
            </div>
          </div>
        )}
        <div className="music-container flex-center">
          <div className="play-list-title">
            <div className="title">현재 재생목록</div>
            {isPlayListOpened ? (
              <BsChevronUp
                className="button"
                onClick={() => setIsPlayListOpened(!isPlayListOpened)}
              />
            ) : (
              <BsChevronDown
                className="button"
                onClick={() => setIsPlayListOpened(!isPlayListOpened)}
              />
            )}
          </div>
          {!isPlayListOpened || (
            <div className="play-list-music-container">
              {isSearchClicked ? (
                <PlayListMusic
                  musicTracks={filteredTracks}
                  setMusicTracks={setMusicTracks}
                  setTrackIndex={setTrackIndex}
                />
              ) : (
                <PlayListMusic
                  musicTracks={musicTracks}
                  setMusicTracks={setMusicTracks}
                  setTrackIndex={setTrackIndex}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </StyledPlayList>
  );
};

export default PlayList;