import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styled from "styled-components";
import { useAuth } from "@/context/AuthContext";
import CommentSection from "@/components/CommentSection";
import Image from "next/image";
import { DeatilPost } from "@/types/post-type";


export default function PostDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [post, setPost] = useState<DeatilPost | null>(null);
  const { user } = useAuth();  // 현재 로그인된 user 정보 가져오기
  const { id } = router.query;

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // 게시글 불러오기 + 좋아요 상태
  useEffect(() => {
    if (!id || !user?.email) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8082/api/boards/${id}`);
        setPost(res.data);

        const statusRes = await axios.get(`http://localhost:8082/api/likes/${id}/like-status?email=${user.email}`)
        setLiked(statusRes.data.liked);
        setLikeCount(statusRes.data.likeCount);

      } catch (err) {
        console.error(err);
        alert("존재하지 않는 게시글입니다.");
        router.push("/postList");
      }
    };
    fetchData();
  }, [id, user?.email]);

  // 게시글 삭제
  const handleDelete = async () => {
    const confirmDelete = confirm("삭제하시겠습니까?");
    if (!confirmDelete) return;
    try {
      await axios.delete(`http://localhost:8082/api/boards/${id}/delete`);
      alert("게시글이 삭제되었습니다.");
      router.push("/postList");
    } catch (error) {
      console.error("삭제 중 오류:", error);
      alert("게시글 삭제에 실패했습니다.");
    }
  };

  // 좋아요 기능
  const handleToggleLike = async () => {
    if (!user?.email) return alert("로그인이 필요합니다.");
    try {
      const res = await axios.post(`http://localhost:8082/api/likes/${id}?email=${user.email}`);
      if (res.data === "좋아요 등록") {
        setLiked(true);
        setLikeCount((prev) => prev + 1);
      } else {
        setLiked(false);
        setLikeCount((prev) => prev - 1);
      }
    } catch (error) {
      console.error("좋아요 토글 실패", error);
    }
  };

  if (!post) return <div>로딩 중...</div>;

  return (
    <Card>
      <Title>{post.title}</Title>
      <Meta>
        <span>작성자: {post.name}</span>
        <span>작성일: {post.createdDatetime}</span>
        <span>조회수: {post.hitCnt}</span>
        <div style={{ marginTop: "1rem" }}>
        <LikeButton onClick={handleToggleLike} color={liked ? "#ff4d4f" : "#aaa"}>
          {liked ? "❤️" : "🤍"} {likeCount}
        </LikeButton>
      </div>
      </Meta>
      <Divider />
      <Content>{post.contents}</Content>
      {post.files && post.files.length > 0 && (
        <FileBox>
          <h4>📎 첨부파일</h4>
          <ul>
            {post.files.map((file, idx) => (
              <li key={idx}>
              <Image
                src={`http://localhost:8082/uploads/${file.storedFilePath}`}
                alt={file.originalFileName}
                width={600} // 원하는 가로 사이즈
                height={400} // 원하는 세로 사이즈
                style={{ objectFit: "contain" }} // 이미지 비율 유지
              />
              </li>
            ))}
          </ul>
        </FileBox>
      )}
      <ButtonBox>
        {user?.name === post.name && (
          <>
            <Button onClick={() => router.push(`/edit/${id}`)}>수정하기</Button>
            <Button onClick={handleDelete}>삭제하기</Button>
          </>
        )}
        <Button onClick={() => router.push("/postList")}>목록으로</Button>
      </ButtonBox>

      <CommentSection boardId={post.boardId} />

    </Card>
  );
}

// 스타일
const Card = styled.div`
  max-width: 800px;
  margin: 2.5rem auto;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.subText};
  margin-bottom: 1.2rem;
  gap: 4px;
`;

const Divider = styled.hr`
  margin: 1.8rem 0;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Content = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.8;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.text};
`;

const ButtonBox = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const Button = styled.button<{ color?: "gray" | "red" }>`
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  background-color: ${({ color }) =>
    color === "gray"
      ? "#e5e7eb"
      : color === "red"
      ? "#ef4444"
      : "#fcd34d"};
  color: ${({ color }) =>
    color === "gray" ? "#111" : "#fff"};

  &:hover {
    background-color: ${({ color }) =>
      color === "gray"
        ? "#d1d5db"
        : color === "red"
        ? "#dc2626"
        : "#fbbf24"};
  }
`;

const FileBox = styled.div`
  margin-top: 2rem;

  h4 {
    font-weight: bold;
    margin-bottom: 0.6rem;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li a {
    color: #2563eb;
    text-decoration: underline;

    &:hover {
      color: #1e40af;
    }
  }
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #ef4444;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;
