import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotesService {
  constructor(private readonly prisma: PrismaService) {}

  getAllNotes() {
    return this.prisma.note.findMany({ where: { isArchived: false } });
  }

  getArchivedNotes() {
    return this.prisma.note.findMany({ where: { isArchived: true } });
  }

  createNote(data: { title: string; content: string }) {
    return this.prisma.note.create({ data });
  }

  updateNote(id: number, data: { title?: string; content?: string }) {
    return this.prisma.note.update({ where: { id }, data });
  }

  archiveNote(id: number) {
    return this.prisma.note.update({
      where: { id },
      data: { isArchived: true },
    });
  }

  deleteNote(id: number) {
    return this.prisma.note.delete({ where: { id } });
  }
}
