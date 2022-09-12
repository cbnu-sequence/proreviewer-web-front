import { useEffect, useState } from 'react';
import { StyledLoading } from './styles';

const Loading = () => {
  const [tip, setTip] = useState('');

  useEffect(() => {
    const tips = [
      '프로리뷰어는 여러 소셜 로그인을 지원하고 있습니다.',
      "헤르만 에빙하우스는 의미가 없는 철자열(이를테면, 'fjisd')을 가지고 망각의 양을 연구했습니다. (feat: 위키백과)",
      '주말에 새로운 지식들을 습득하고 주말에 실습을 하며 복습하는 것은 어떨까요?',
      '새로운 지식을 공부할 때에는 4번이상 반복하는 것이 좋다는 연구결과가 있습니다.',
    ];
    setTip(tips[Math.floor(Math.random() * tips.length)]);
  }, []);

  return (
    <StyledLoading>
      <div className="loading">
        <div className="loading__spinner"></div>
        <div className="loading__tips">
          <h3 className="loading__tips__heading">유용한 정보</h3>
          <span className="loading__tips__text">{tip}</span>
        </div>
      </div>
    </StyledLoading>
  );
};

export default Loading;
