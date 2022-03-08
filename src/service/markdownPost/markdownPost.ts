class MarkdownPost {

  private readonly title: string
  private readonly description: string
  private readonly order: number
  private readonly createdAt: Date
  private readonly updatedAt: Date
  private readonly content: string
  private readonly titleList: string[]

  static of (markdownContent: string): MarkdownPost {
    const [description, order, createdAt, updatedAt] = this.parseMetadata(markdownContent)
    const content = this.parseContent(markdownContent)
    const title = this.parseTitle(content)
    const titleList = this.parseTitleList(content)
    return new MarkdownPost(
      title,
      description,
      Number(order),
      new Date(createdAt),
      new Date(updatedAt),
      content,
      titleList
    )
  }

  private static parseTitleList (content: string): string[] {
    const titleListReg = new RegExp(/#{2,}\s.+/, 'g')
    const titleList = content.match(titleListReg)

    if (!titleList) {
      return []
    }
    return titleList.map(title => title.replaceAll('#', '').trim())
  }

  private static parseTitle (content: string) {
    return content.split('\n')[0].replace('#', '').trim()
  }

  private static parseContent (markdownContent: string) {
    const { line, metadataEndIndex } = this.lastIndexOfMetadata(markdownContent)
    return markdownContent.trim().substring(metadataEndIndex + line.length)
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
    content: string,
    titleList: string[]
  ) {
    this.title = title
    this.description = description
    this.order = order
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.content = content
    this.titleList = titleList
  }

  getTitle (): string {
    return this.title
  }

  getContent (): string {
    return this.content
  }

  getTitleList (): string[] {
    return this.titleList
  }
}

export default MarkdownPost