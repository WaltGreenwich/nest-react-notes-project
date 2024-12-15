import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  getAllNotes() {
    return this.notesService.getAllNotes();
  }

  @Get('archived')
  getArchivedNotes() {
    return this.notesService.getArchivedNotes();
  }

  @Post()
  createNote(@Body() noteData: { title: string; content: string }) {
    return this.notesService.createNote(noteData);
  }

  @Put(':id')
  updateNote(
    @Param('id') id: string,
    @Body() noteData: { title?: string; content?: string },
  ) {
    return this.notesService.updateNote(+id, noteData);
  }

  @Put(':id/archive')
  archiveNote(@Param('id') id: string) {
    return this.notesService.archiveNote(+id);
  }

  @Delete(':id')
  deleteNote(@Param('id') id: string) {
    return this.notesService.deleteNote(+id);
  }
}
