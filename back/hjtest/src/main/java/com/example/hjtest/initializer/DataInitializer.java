package com.example.hjtest.initializer;

import com.example.hjtest.entity.Board;
import com.example.hjtest.entity.Comment;
import com.example.hjtest.entity.Member;
import com.example.hjtest.repository.BoardRepository;
import com.example.hjtest.repository.CommentRepository;
import com.example.hjtest.repository.MemberRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class DataInitializer {

    private final MemberRepository memberRepository;
    private final BoardRepository boardRepository;
    private final CommentRepository commentRepository;

    @PostConstruct
    public void initData() {
        if (memberRepository.count() > 0) return; // 이미 데이터가 있으면 초기화 안 함

        Member member = createMember();
        memberRepository.save(member);

        // 게시글 12개 생성
        for (int i = 1; i <= 12; i++) {
            Board board = createBoard("게시글" + i, "내용" + i, member);
            boardRepository.save(board);
        }

        // 댓글 2개 예시
        Board firstBoard = boardRepository.findById(1).orElseThrow();
        Board lastBoard = boardRepository.findById(12).orElseThrow();

        commentRepository.save(createComment("댓글1", member, firstBoard));
        commentRepository.save(createComment("댓글2", member, lastBoard));
    }

    private Member createMember() {
        Member member = new Member();
        member.setEmail("alice@example.com");
        member.setName("이재우");
        member.setPassword("1234");
        member.setAddress("삼천포");
        member.setPhone("01050095173");
        return member;
    }

    private Board createBoard(String title, String content, Member member) {
        Board board = new Board();
        board.setTitle(title);
        board.setContents(content);
        board.setMember(member);
        return board;
    }

    private Comment createComment(String content, Member member, Board board) {
        Comment comment = new Comment();
        comment.setContent(content);
        comment.setMember(member);
        comment.setBoard(board);
        return comment;
    }
}
