import React, { useEffect } from 'react';
// import useAxios from 'axios-hooks';
// import Testlist from './testlist';
import styled from 'styled-components';
import submit from '../../../../src/assets/해커톤_참가신청서.hwp';
import aiposter from '../../../../src/assets/AI_challenges_poster.jpg';

import submitJsonTest from '../../../../src/assets/test.json.zip';
import ContextBottom from 'components/AppLayoutComponents/ContextBottom';
import Fileupload from 'utils/Fileupload';

function OutlineContexts({ OutlineContexts }) {
  // const { title, explanation } = OutlineContexts;
  const StyledUl = styled.ul``;
  const Styledli = styled.li``;

  return (
    <>
      {/* {temp.data} */}
      <div className="mb-12">
        <div className="mt-6 mx-4">
          <Fileupload />
          <div className="mt-6 mx-4 text-base md:text-xl lg:text-2xl font-bold">
            2021 한국어 질의응답 AI 경진대회: 비디오 네러티브 질의응답 태스크
            {/* {title} */}
          </div>
          <div className="mt-2 ml-4 text-base opacity-60">
            {/* {explanation} */}
          </div>

          <img className="mt-6 mx-auto w-3/6 " src={aiposter} alt="" />

          <div className="mt-8 mx-4">
            <p className="mb-2 text-lg font-bold">1. 개요</p>{' '}
            <p>
              비디오 네러티브 질의응답이란 영상(4~5초)에 대한 질문이 주어졌을 때
              해당 질문에 대한 답을 보기에서 찾는 태스크로서, 기존의 이미지에
              대한 질문에 답하는 VQA 문제에 시간축이 추가된 태스크임. 본
              태스크는 영상정보와 자연어 정보에 대한 이해를 바탕으로 각각 다른
              modality 정보를 활용하여 학습하여, 주어진 자연어 질문에 대한 가장
              적합한 답을 찾는 문제임.
            </p>{' '}
            <p>
              {' '}
              예를 들어, 빨간색 유니폼을 입은 선수가 오른쪽으로 뛰는 영상에 대해
              다음과 같은 질문과 보기가 주어짐.
            </p>
            <StyledUl className="pb-3">
              <Styledli className="list-inside mt-4 list-disc">
                {' '}
                질문: 오른쪽으로 뛰는 사람이 어떤 옷을 입었습니까?
              </Styledli>
              <Styledli className="list-inside list-disc">
                보기: 1. 한복, 2. 소방복, 3. 운동복, 4. 경찰복, 5. 수술복
              </Styledli>
            </StyledUl>
            <hr />
            <p className="mt-4 mb-2 text-lg font-bold">2. 과제</p> <p></p>
            제출 방법{' '}
            <StyledUl>
              <Styledli className="list-inside list-disc">
                *
                <a
                  className="underline text-blue-500 "
                  href={submitJsonTest}
                  download="test.json"
                >
                  첨부
                </a>
                파일의 형식을 참고하여 리더보드에 제출
              </Styledli>
              <Styledli className="list-inside list-disc">데이터 예시</Styledli>
              <pre>
                {`{
	"7421757": 0,
	"7421758": 4,
	"7421759": 0,
	"7421760": 0,
	"7424201": 0,
	"7424202": 4,
	"7424203": 4,
	"7424204": 3,
	"7422561": 4,
	"7422562": 0,
}`}
              </pre>
              <Styledli className="list-inside list-disc">
                각 문제의 id를 key로, 그리고 각 문제에 대해 예측된
                정답(integer)을 value로 갖는 JSON 파일을 제출함
              </Styledli>
              <p className="px-5">
                예) 데이터의 qid 가 7383289인 문제에 대해 정답을 0 으로
                예측하였음
              </p>
              <p className="font-bold text-red-500 text-base">
                제출시 유의사항
              </p>
              <Styledli className="list-inside list-disc">
                참가 신청서에 기재한 “팀 이름”을 파일명으로 하여 제출하여야
                리더보드에 반영됨
              </Styledli>
              <Styledli className="list-inside list-disc">
                예를들어, 참가팀 이름이 “참가팀” 이라면, 제출 파일명은
                “참가팀.json”으로 제출함
              </Styledli>
            </StyledUl>
            <StyledUl>
              <Styledli className="list-inside list-disc">
                {' '}
                주어진 영상, 영상요약문, 질문을 활용하여, 보기의 정답 후보 중
                가장 적합한 정답을 선택하는 문제
              </Styledli>
              <Styledli className="list-inside list-disc pb-3">
                평가 지표에는 accuracy가 활용됩니다
              </Styledli>
            </StyledUl>
            <hr />
            <p className="mt-4 mb-2 text-lg font-bold">3. 상금</p>{' '}
            <StyledUl>
              <Styledli className="list-inside list-disc">
                {' '}
                상금 및 시상규모
              </Styledli>
            </StyledUl>
            ※ 총 상금 500만원 <br />
            <p className="ml-4">1위(최우수상) : 상금 300만원 (1팀)</p>
            <p className="ml-4">2등(우수상) : 상금 150만원 (1팀)</p>
            <p className="ml-4 pb-3">3등(장려상) : 상금 50만원 (1팀)</p>
            <hr />
            <p className="mt-4 pb-3 text-lg font-bold">4. 참가신청</p>{' '}
            <StyledUl>
              <Styledli className="list-inside list-disc mb-2">
                {' '}
                *
                <a className="underline text-blue-500 " href={submit} download>
                  첨부
                </a>
                된 참가 신청서를 작성하여 전자우편(jiseong@kaist.ac.kr)으로 제출
              </Styledli>

              <hr />
              <p className="mt-4 mb-2 text-lg font-bold">5. 유의사항/기타</p>
              <p className="py-1">
                산출물에 대한 일체의 권리는 응모자에게 귀속되며, 입선작의
                소스코드에 한해 오픈소스 라이선스로 공개되어야 함을
                알려드립니다.{' '}
              </p>
              <StyledUl>
                <Styledli className="list-inside px-2 py-1">
                  1) 공모전에 출품된 작품에 대한 저작권(저작재산권,
                  저작인격권)은 응모자에게 있으며, 수상 후에도 입상자에게
                  귀속됨을 원칙으로 한다.
                </Styledli>
                <Styledli className="list-inside px-2 py-1">
                  2) 주최자는 입상작에 한하여 비영리 목적으로 오픈소스
                  라이선스로 공개를 요구할 수 있다. 해당 라이선스는 CC
                  라이선스로 저작자 표시, 비영리, 변경금지, 동일조건변경허락을
                  포함한다.
                </Styledli>
                <Styledli className="list-inside px-2 py-1">
                  3) 응모자는 응모와 동시에 추후 입상 시 공모전 요강에 기재되어
                  있는 이용 방법 및 조건의 범위 안에서 저작물(입상작) 이용을
                  허락한 것으로 보고, 입상작의 저작재산권에 대한 이용료는 입상에
                  따른 시상금(또는 상품)으로 대체될 수 있다.
                </Styledli>
                <Styledli className="list-inside px-2 py-1">
                  4) 향후, 주최자는 입상작에 대한 저작재산권(전부 또는 일부)을
                  양수할 필요가 있거나, 공모전 요강에 공고된 범위를 넘어
                  입상작을 이용할 경우, 저작자와 별도로 합의하여 정한다.
                </Styledli>
                <Styledli className="list-inside px-2 py-1">
                  5) 응모자는 공모전의 저작권과 관련한 이의 사항이 있을 경우
                  (주)써로마인드를 통해 이의신청을 할 수 있다.
                </Styledli>
                <Styledli className="list-inside px-2 py-1">
                  6) 향후 공모전 출품작 저작권과 관련한 분쟁이 발생할 경우
                  한국저작권 위원회에 조정을 신청하여 해결할 수 있으며, 양
                  당사자는 원활한 분쟁 해결을 위해 상호 노력한다.
                </Styledli>
                <Styledli className="list-inside px-2 py-1">
                  7) 응모자는 응모작이 제3자의 저작권, 초상권 등을 침해하지
                  않도록 주의 의무를 다하여야 한다.
                </Styledli>
                <Styledli className="list-inside px-2 py-1">
                  8) 주최자는 응모작 유출방지 등 주의의무를 다한다.
                </Styledli>
                <Styledli className="list-inside px-2 py-1">
                  9) 주최자는 입상자의 저작인격권을 존중하여야 한다. 주최자는
                  원칙적으로 저작자인 입상자의 성명을 표시하고, 입상작의
                  내용·형식 및 제호의 동일성을 유지하여야 한다.
                </Styledli>
                <Styledli className="list-inside px-2 py-1 pb-3">
                  10) 주최자는 응모작을 접수할 때 응모작 반환 여부에 대한
                  응모자의 의사를 확인하는 절차를 마련하여 저작자가 저작물의
                  반환을 요구할 경우 저작자에게 반환하되, 반환과 관련한 추가
                  비용이 발생하는 경우 저작자가 부담할 수 있다.
                </Styledli>
              </StyledUl>
            </StyledUl>
            <hr />
            <p className="text-lg mt-4 font-bold">주최 :</p>
            <StyledUl>
              <Styledli className="list-inside list-disc">
                과학기술정보통신부 · 한국지능정보사회진흥원(NIA)
              </Styledli>
            </StyledUl>
            <p className="text-lg mt-4 font-bold">주관 :</p>
            <StyledUl>
              <Styledli className="list-inside list-disc">
                (주)써로마인드 · KAIST · (주)테디썸 · (주)유클리드소프트
              </Styledli>
            </StyledUl>
            <p className="mt-4 mb-3">
              본 경진대회는 과학기술정보통신부가 주관하고,
              한국지능정보사회진흥원이 지원하는 인공지능 학습용 데이터 구축 사업
              - 비디오 네러티브 질의응답 데이터 과제의 지원을 받았습니다.
            </p>
            <hr />
            <ContextBottom />
          </div>
        </div>
      </div>
    </>
  );
}

export default OutlineContexts;
