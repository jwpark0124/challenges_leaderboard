import React from 'react';
import styled from 'styled-components';
import kqcimg from '../../../assets/koreanQnAChallenges.png';
import datastructure from '../../../../src/assets/datastructure.png';
import ContextBottom from 'components/AppLayoutComponents/ContextBottom';
import Fileupload from 'utils/Fileupload';

function DatasetContexts({ DatasetContexts }) {
  const StyledUl = styled.ul``;
  const Styledli = styled.li``;
  const lt = '<';
  const gt = '>';
  return (
    <>
      <div className="mb-12">
        <div className="mt-6 mx-4">
          <Fileupload />
          <div className="mt-6 text-base md:text-xl lg:text-2xl font-bold">
            데이터 구조
          </div>
          <img
            className="w-4/5 md:w-1/2 justify-center ml-12"
            src={datastructure}
            alt=""
          />

          {/* <div className="ml-6">
            <pre>{'{사용자 지정 경로}/원천데이터'} </pre>

            <StyledUl className="mb-2 overflow-visible">
              <Styledli className="list-inside ml-52 mb-1">
                {' '}
                ㄴ예능교양
              </Styledli>
              <Styledli className="list-inside ml-72 mb-1"> ㄴ 대본X </Styledli>
              <Styledli className="list-inside ml-72 mb-1"> ㄴ 대본O</Styledli>
              <Styledli className="list-inside ml-52 mb-1"> ㄴ스포츠</Styledli>
              <Styledli className="list-inside ml-72 mb-1"> ㄴ 대본X</Styledli>
              <Styledli className="list-inside ml-52 mb-1">
                {' '}
                ㄴ생활안전
              </Styledli>
              <Styledli className="list-inside ml-72 mb-1"> ㄴ 대본X</Styledli>
              <Styledli className="list-inside ml-72 mb-1"> ㄴ 대본O</Styledli>
            </StyledUl>

            <pre>{`{사용자 지정 경로}/라벨링데이터`}</pre>
            <StyledUl className="mb-2">
              <Styledli className="list-inside ml-52 mb-1">
                {' '}
                ㄴ예능교양
              </Styledli>
              <Styledli className="list-inside ml-72 mb-1"> ㄴ 대본X </Styledli>
              <Styledli className="list-inside ml-72 mb-1"> ㄴ 대본O</Styledli>
              <Styledli className="list-inside ml-52 mb-1"> ㄴ스포츠</Styledli>
              <Styledli className="list-inside ml-72 mb-1"> ㄴ 대본X</Styledli>
              <Styledli className="list-inside ml-52 mb-1">
                {' '}
                ㄴ생활안전
              </Styledli>
              <Styledli className="list-inside ml-72 mb-1"> ㄴ 대본X</Styledli>
              <Styledli className="list-inside ml-72 mb-1"> ㄴ 대본O</Styledli>
            </StyledUl>
          </div> */}
          <StyledUl className="mb-2">
            <Styledli className="list-inside list-disc">
              데이터 다운로드 및 feature 파일 다운로드는 “베이스라인”
              코드의&nbsp;
              <a
                className="font-bold	bg-yellow-200"
                href="https://github.com/Surromind-AI/videonarrative/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                README
              </a>
              &nbsp; 참고
            </Styledli>
          </StyledUl>
          <hr />
          <div className="mt-6  text-base md:text-xl lg:text-2xl font-bold mb-4">
            데이터셋 설명
          </div>
          <StyledUl className="mb-2">
            <Styledli className="list-inside list-disc mb-1">
              {' '}
              예능/교양, 스포츠, 생활/안전 3가지 카테고리에 속하는 방송 영상
              클립파일과 이에 매칭되는 JSON파일로 구성됨
            </Styledli>
            <Styledli className="list-inside list-disc mb-1">
              JSON 내 어노테이션된 정보는 사람이 영상을 육안으로 확인하고
              2~3문장으로 요약한 '요약문' 텍스트와, 영상당 2~4쌍 매칭된
              '질의응답' 텍스트, 그리고 그 외 상황, 장소, 감정 등의 메타데이터가
              포함
            </Styledli>
            <Styledli className="list-inside list-disc mb-1">
              대본이 없는 데이터의 경우 2개의 시각절 질의로 구성됨
            </Styledli>
            <Styledli className="list-inside list-disc mb-1">
              대본이 있는 데이터의 경우 2개의 시각적 질의와 2개의 맥락적 질의로
              구성됨
              <StyledUl className="list-inside ml-4 my-1">
                <Styledli className="list-inside list-decimal ">
                  맥락적 질의의 경우 대본을 활용하여 작성된 질의응답이 있을 수
                  있음(발화 내용 등)
                </Styledli>
                <Styledli className="list-inside list-decimal mb-1">
                  대본 내 텍스트가 아닌 화면상의 텍스트는 활용하지 않음
                </Styledli>
              </StyledUl>
            </Styledli>
          </StyledUl>
          <hr />
          <p className="mt-2 mb-3">
            {' '}
            {lt}참고화면{gt}
          </p>

          <img className="pb-3" src={kqcimg} alt="" />
          <hr />
          <ContextBottom />
        </div>
      </div>
    </>
  );
}

export default DatasetContexts;
