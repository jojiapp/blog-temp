class MarkdownPost {

  private readonly title: string
  private readonly description: string
  private readonly order: number
  private readonly createdAt: Date
  private readonly updatedAt: Date
  private readonly content: string

  static of (markdownContent: string): MarkdownPost {
    const [description, order, createdAt, updatedAt] = this.parseMetadata(markdownContent)
    const content = this.parseContent(markdownContent)
    
    return new MarkdownPost(
      '',
      description,
      Number(order),
      new Date(createdAt),
      new Date(updatedAt),
      content
    )
  }

  private static parseContent (markdownContent: string) {
    const { line, metadataEndIndex } = this.lastIndexOfMetadata(markdownContent)
    return markdownContent.substring(metadataEndIndex + line.length + 1)
  }

  private static parseMetadata (markdownContent: string) {
    const { line, metadataEndIndex } = this.lastIndexOfMetadata(markdownContent)
    const metadataStr = markdownContent.substring(line.length, metadataEndIndex)
    return metadataStr.split(/[a-zA-Z]+:/)
  }

  private static lastIndexOfMetadata (markdownContent: string) {
    const line = '---'
    const metadataEndIndex = markdownContent.indexOf(line, 1)
    return { line, metadataEndIndex }
  }

  private constructor (
    title: string,
    description: string,
    order: number,
    createdAt: Date,
    updatedAt: Date,
    content: string
  ) {
    this.title = title
    this.description = description
    this.order = order
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.content = content
  }

  getContent (): string {
    return this.content
  }
}

export default MarkdownPost