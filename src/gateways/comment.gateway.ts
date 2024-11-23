import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CommentDto } from 'src/modules/comments/comment.dto';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET'],
    credentials: true,
  }
  ,
})
export class CommentGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    // console.log('Client connected:', client.id);
    return client.id
  }

  handleDisconnect(client: Socket) {
    // console.log('Client disconnected:', client.id);
    return client.id
  }

  emitNewComment(comment: CommentDto) {
    this.server.emit('newComment', comment); // envia o evento 'newComment' para todos os clientes conectados
  }
}
