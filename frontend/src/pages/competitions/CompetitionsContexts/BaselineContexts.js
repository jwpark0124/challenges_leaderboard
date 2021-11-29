import React from 'react';
import styled from 'styled-components';
import ContextBottom from 'components/AppLayoutComponents/ContextBottom';
import Fileupload from 'utils/Fileupload';

function BaselineContexts({ BaselineContexts }) {
  const StyledUl = styled.ul``;
  const Styledli = styled.li``;
  const lt = '<';
  const gt = '>';
  return (
    <>
      <div className="mb-12">
        <div className="mt-6 mx-4">
          <Fileupload />
          <div className="mt-6 text-base md:text-xl lg:text-2xl font-bold pb-3">
            베이스라인
          </div>
          <StyledUl className="mb-2">
            <Styledli className="list-inside  mb-1">
              1. 아래의 링크를 클릭하면 베이스라인 코드의 github 주소로
              연결됩니다.
              <Styledli className="list-inside list-disc mb-1">
                <a
                  className="underline text-blue-500 "
                  href="https://github.com/Surromind-AI/videonarrative"
                >
                  링크
                </a>
              </Styledli>
            </Styledli>
            <Styledli className="list-inside  mb-1">
              2. 해당 github 의 README에는 다음의 정보가 포함되어 있습니다.
            </Styledli>

            <Styledli className="list-inside list-disc">
              {' '}
              raw 데이터 다운로드 주소 비디오 feature 파일 다운로드 주소
            </Styledli>
            <Styledli className="list-inside list-disc pb-3">
              질문-답변의 언어 feature 파일 다운로드 주소
            </Styledli>
          </StyledUl>
        </div>
        <hr />
        <ContextBottom />
      </div>
    </>
  );
}

export default BaselineContexts;
